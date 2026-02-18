param(
    [ValidateSet('ToMoi','ToRepo')]
    [string]$Direction = 'ToMoi',
    [string]$RepoRoot = "$env:USERPROFILE\Documents\GitHub\ArcCAM",
    [string]$MoiDataDir = "$env:USERPROFILE\AppData\Roaming\Moi"
)

$ErrorActionPreference = 'Stop'

Write-Host "ArcCAM sync: $Direction"
Write-Host "RepoRoot:   $RepoRoot"
Write-Host "MoiDataDir: $MoiDataDir"

if (-not (Test-Path $RepoRoot)) {
    throw "Repo path not found: $RepoRoot"
}

if (-not (Test-Path $MoiDataDir)) {
    throw "Moi data path not found: $MoiDataDir"
}

$iconSource = if ($Direction -eq 'ToMoi') { Join-Path $RepoRoot 'icons\*' } else { Join-Path $MoiDataDir 'icons\*' }
$iconDest   = if ($Direction -eq 'ToMoi') { Join-Path $MoiDataDir 'icons' } else { Join-Path $RepoRoot 'icons' }

$arcSource  = if ($Direction -eq 'ToMoi') { Join-Path $RepoRoot 'ArcCAM\*' } else { Join-Path $MoiDataDir 'ArcCAM\*' }
$arcDest    = if ($Direction -eq 'ToMoi') { Join-Path $MoiDataDir 'ArcCAM' } else { Join-Path $RepoRoot 'ArcCAM' }

$startupSource = if ($Direction -eq 'ToMoi') { Join-Path $RepoRoot 'startup\21ArcCAM.js' } else { Join-Path $MoiDataDir 'startup\21ArcCAM.js' }
$startupDest   = if ($Direction -eq 'ToMoi') { Join-Path $MoiDataDir 'startup' } else { Join-Path $RepoRoot 'startup' }

Copy-Item $iconSource $iconDest -Force
Copy-Item $arcSource $arcDest -Force
Copy-Item $startupSource $startupDest -Force

if ($Direction -eq 'ToRepo') {
    Copy-Item (Join-Path $MoiDataDir 'ArcCAM_push.ps1') $RepoRoot -Force -ErrorAction SilentlyContinue
}

Write-Host 'Sync complete.'
