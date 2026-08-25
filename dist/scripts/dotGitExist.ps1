param([string]$dirPath)

# Check if the .git directory exists
if (Test-Path "$dirPath\.git") {
    Write-Output "true"
} else {
    Write-Output "false"
}