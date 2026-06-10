param(
    [string]$Message = ""
)

if (-not $Message.Trim()) {
    $Message = "Update CultureFit $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

git branch -M main
git add .
git diff --cached --quiet

if ($LASTEXITCODE -eq 0) {
    Write-Host "No changes to commit."
} else {
    git commit -m $Message
}

git push -u origin main
