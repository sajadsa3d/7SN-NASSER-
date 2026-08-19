import urllib.request
import re
import json

url = "https://www.instagram.com/altief_furniture/"
headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
    'Accept-Language': 'en-US,en;q=0.9,ar;q=0.8'
}

try:
    req = urllib.request.Request(url, headers=headers)
    html = urllib.request.urlopen(req).read().decode('utf-8')
    print("Page fetched successfully. Length:", len(html))
    
    # Try finding og:image or post image urls
    og_image = re.findall(r'<meta property="og:image" content="([^"]+)"', html)
    print("og:image:", og_image)
    
    title = re.findall(r'<title>([^<]+)</title>', html)
    print("Title:", title)
    
except Exception as e:
    print("Error fetching:", e)
