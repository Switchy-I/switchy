# Define the directory name
$dirName = "data"

# Check if the directory exists, if not, create it
if (-Not (Test-Path $dirName -PathType Container)) {
    New-Item -ItemType Directory -Path $dirName | Out-Null
}

# Array of file names
$files = @("user.json", "data.json")

# Create the files if they don't exist
foreach ($file in $files) {
    $filePath = "$dirName\$file"
    if (-Not (Test-Path $filePath -PathType Leaf)) {
        New-Item -ItemType File -Path $filePath | Out-Null
    }
}