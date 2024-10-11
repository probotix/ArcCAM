# PI.ps1
$PI = 3.14
Write-Host "Copying To Local GitHub Repository"


cd "$env:USERPROFILE\AppData\Roaming\Moi"
Copy-Item icons/* -Recurse $env:USERPROFILE\Documents\GitHub\ArcCAM\icons
Copy-Item commands/ArcCAM.js $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/ArcCAM.htm $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/Common.js $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item "startup/21ArcCAM.js" $env:USERPROFILE\Documents\GitHub\ArcCAM\startup

Copy-Item commands/SetCurveStart* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/OrderCurves* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/SetCircles* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/PointCoord* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/CreateLeadInOut* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/_NimbleNudge* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item commands/PocketOffset* $env:USERPROFILE\Documents\GitHub\ArcCAM\commands
Copy-Item ArcCAM_push.ps1 $env:USERPROFILE\Documents\GitHub\ArcCAM\



#cd "$env:USERPROFILE\AppData\Roaming\Moi"
#cd "$env:USERPROFILE\Documents\GitHub\ArcCAM"