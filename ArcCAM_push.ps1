# PI.ps1
$PI = 3.14
Write-Host "Copying To Local GitHub Repository"

Copy-Item icons/* -Recurse C:\Users\lensh\Documents\GitHub\ArcCAM\icons
Copy-Item commands/ArcCAM.js C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/ArcCAM.htm C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/Common.js C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item "startup/21 ArcCAM.js" C:\Users\lensh\Documents\GitHub\ArcCAM\startup

Copy-Item commands/SetCurveStart* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/OrderCurves* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/SetCircles* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/PointCoord* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/CreateLeadInOut* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/_NimbleNudge* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item commands/PocketOffset* C:\Users\lensh\Documents\GitHub\ArcCAM\commands
Copy-Item ArcCAM_push.ps1 C:\Users\lensh\Documents\GitHub\ArcCAM\