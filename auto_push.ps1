# ======================================================
# Auto GitHub Push & Watch Script for Home Furniture Store
# ======================================================

param (
    [string]$RepoUrl = "https://github.com/sajadsa3d/7SN-NASSER-.git"
)

try {
    [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
} catch {}

Write-Host "================================================" -ForegroundColor Cyan
Write-Host "   GitHub Auto-Push Watcher" -ForegroundColor Yellow
Write-Host "================================================" -ForegroundColor Cyan
Write-Host ""

# Ensure git remote is set
$CurrentRemote = git remote get-url origin 2>$null
if (-not $CurrentRemote) {
    git remote add origin $RepoUrl
    Write-Host "[+] Remote origin set to: $RepoUrl" -ForegroundColor Green
} else {
    Write-Host "[+] Connected to remote: $CurrentRemote" -ForegroundColor Green
}

function Invoke-GitSync {
    param (
        [string]$Reason = "Auto Update"
    )

    $Status = git status --porcelain
    if ([string]::IsNullOrWhitespace($Status)) {
        Write-Host "[+] Repository is up to date. No pending changes." -ForegroundColor DarkGray
        return
    }

    $Timestamp = Get-Date -Format "yyyy-MM-dd HH:mm:ss"
    Write-Host ""
    Write-Host "[$Timestamp] Changes detected! Pushing to GitHub..." -ForegroundColor Yellow

    git add -A | Out-Null
    $CommitMsg = "$Reason - $Timestamp"
    git commit -m $CommitMsg | Out-Null
    
    $PushOutput = git push origin main 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host "[$Timestamp] SUCCESS: Pushed changes to GitHub!" -ForegroundColor Green
    } else {
        # Attempt setting upstream branch or force sync latest local state
        $UpstreamResult = git push -u origin main 2>&1
        if ($LASTEXITCODE -eq 0) {
            Write-Host "[$Timestamp] SUCCESS: Set upstream and pushed changes to GitHub!" -ForegroundColor Green
        } else {
            $ForceResult = git push -f origin main 2>&1
            if ($LASTEXITCODE -eq 0) {
                Write-Host "[$Timestamp] SUCCESS: Force pushed latest local version to GitHub!" -ForegroundColor Green
            } else {
                Write-Host "[$Timestamp] ERROR: Push failed." -ForegroundColor Red
                Write-Host $PushOutput -ForegroundColor DarkRed
            }
        }
    }
}

Write-Host ""
Write-Host "Checking current repository status..." -ForegroundColor Cyan
Invoke-GitSync -Reason "Initial Sync"

Write-Host ""
Write-Host "------------------------------------------------" -ForegroundColor DarkGray
Write-Host "Watcher is active! Auto-pushing on file saves." -ForegroundColor Green
Write-Host "Press Ctrl + C to stop." -ForegroundColor DarkGray
Write-Host "------------------------------------------------" -ForegroundColor DarkGray
Write-Host ""

while ($true) {
    Start-Sleep -Seconds 5
    $Status = git status --porcelain
    if (-not [string]::IsNullOrWhitespace($Status)) {
        Start-Sleep -Seconds 2
        Invoke-GitSync -Reason "Auto Update"
    }
}
