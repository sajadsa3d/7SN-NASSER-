# ======================================================
# Auto GitHub Push & Watch Script for Home Furniture Store
# ======================================================

param (
    [string]$RepoUrl = ""
)

[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
$Host.UI.RawUI.WindowTitle = "GitHub Auto-Push Watcher"

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   أداة الرفع التلقائي إلى GitHub (Auto Push)   " -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Ensure we are inside Git directory
$GitStatus = git status 2>&1
if ($LASTEXITCODE -ne 0) {
    Write-Host "[!] جاري تهيئة مستودع Git..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Check remote origin
$CurrentRemote = git remote get-url origin 2>$null

if (-not $CurrentRemote) {
    if ([string]::IsNullOrWhitespace($RepoUrl)) {
        Write-Host "لم يتم العثور على رابط مستودع GitHub مرتبط هذا المشروع." -ForegroundColor Yellow
        Write-Host "يرجى إدخال رابط مستودع GitHub الخاص بك (مثال: https://github.com/sajadsa3d/home-furniture-store.git):" -ForegroundColor Cyan
        $RepoUrl = Read-Host "GitHub Repo URL"
    }

    if (-not [string]::IsNullOrWhitespace($RepoUrl)) {
        git remote add origin $RepoUrl
        Write-Host "[✓] تم ربط المستودع بالرابط: $RepoUrl" -ForegroundColor Green
    } else {
        Write-Host "[!] لم يتم إدخال رابط المستودع. يمكنك إدخاله لاحقاً باستعمال: git remote add origin <URL>" -ForegroundColor Red
    }
} else {
    Write-Host "[✓] المستودع مرتبط حالياً بـ: $CurrentRemote" -ForegroundColor Green
}

# Function to handle commit & push
function Push-Changes {
    param ([string]$Reason = "Auto Update")

    $Status = git status --porcelain
    if ([string]::IsNullOrWhitespace($Status)) {
        return $false
    }

    $Timestamp = Get-Date -Format "yyyy-MM-DD HH:mm:ss"
    Write-Host ""
    Write-Host "[$Timestamp] 🔄 تم اكتشاف تغييرات جديدة، جاري الرفع إلى GitHub..." -ForegroundColor Yellow

    git add -A
    $CommitMsg = "$Reason - $Timestamp"
    git commit -m $CommitMsg
    
    $PushOutput = git push origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[$Timestamp] ✅ تم رفع التغييرات بنجاح إلى GitHub!" -ForegroundColor Green
        return $true
    } else {
        # Try setting upstream branch if not set
        if ($PushOutput -match "no upstream branch") {
            git push --set-upstream origin main
            if ($LASTEXITCODE -eq 0) {
                Write-Host "[$Timestamp] ✅ تم رفع التغييرات وتعيين الفرع الرئيسي بنجاح!" -ForegroundColor Green
                return $true
            }
        }
        Write-Host "[$Timestamp] ❌ حدث خطأ أثناء الرفع إلى GitHub:" -ForegroundColor Red
        Write-Host $PushOutput -ForegroundColor DarkRed
        Write-Host "ملاحظة: التأكد من إنشاء المستودع على GitHub وإضافة صلاحيات الوصول." -ForegroundColor Yellow
        return $false
    }
}

# Initial Check and Push
Write-Host ""
Write-Host "🔍 جاري فحص التعديلات الحالية..." -ForegroundColor Cyan
Push-Changes -Reason "Initial Sync"

Write-Host ""
Write-Host "------------------------------------------------" -ForegroundColor DarkGray
Write-Host "🚀 مراقب التغييرات التلقائي يعمل الآن في الخلفية..." -ForegroundColor Green
Write-Host "💡 أي تغيير تحفظه في الملفات سيتم رفعه تلقائياً خلال ثوانٍ." -ForegroundColor Gray
Write-Host "🛑 للوقف: اضغط Ctrl + C في هذه النافذة." -ForegroundColor DarkGray
Write-Host "------------------------------------------------" -ForegroundColor DarkGray
Write-Host ""

# Continuous Watch Loop
while ($true) {
    Start-Sleep -Seconds 5
    $Status = git status --porcelain
    if (-not [string]::IsNullOrWhitespace($Status)) {
        # Wait a small delay to debounce multiple fast saves
        Start-Sleep -Seconds 2
        Push-Changes -Reason "Auto Update"
    }
}
