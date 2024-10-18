# PI.ps1
$PI = 3.14
Write-Host "Copying To Local GitHub Repository"


cd "$env:USERPROFILE\AppData\Roaming\Moi"
Copy-Item icons\* $env:USERPROFILE\Documents\GitHub\ArcCAM\icons\
Copy-Item ArcCAM\* $env:USERPROFILE\Documents\GitHub\ArcCAM\ArcCAM\
Copy-Item "startup/21ArcCAM.js" $env:USERPROFILE\Documents\GitHub\ArcCAM\startup
Copy-Item ArcCAM_push.ps1 $env:USERPROFILE\Documents\GitHub\ArcCAM\

Start-Sleep 5

#cd "$env:USERPROFILE\AppData\Roaming\Moi"
#cd "$env:USERPROFILE\Documents\GitHub\ArcCAM"