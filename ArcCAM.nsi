# Define the name of the installer
Name "ArcCAM"

# Define the output file
OutFile "ArcCAMInstaller.exe"

# Define the default installation directory
InstallDir "$APPDATA\Roaming\Moi\ArcCAM\"

# Set the icon for the installer (optional)
#Icon "setup_icon.ico"

# Pages shown during installation
#Page Directory ; Choose installation directory
Page InstFiles ; Shows installation progress

!include ReplaceInFile3.nsh



Section "Install"
    SetOutPath "$INSTDIR"


	Push 'AdditionalCommandsDirs=' #text to be replaced
	Push "AdditionalCommandsDirs=$APPDATA\Moi\ArcCAM;" #replace with
	Push all #replace all occurrences
	Push all #replace all occurrences
	Push "$APPDATA\Moi\moi.ini" #file to replace in
	Call AdvReplaceInFile
 

  # Include the 6 files to be installed (provide the correct paths)
  File "C:\Users\lensh\Documents\GitHub\ArcCAM\commands\ArcCAM.js"
  File "C:\Users\lensh\Documents\GitHub\ArcCAM\commands\ArcCAM.htm"
  File "C:\Users\lensh\Documents\GitHub\ArcCAM\commands\Common.js"
  #File "C:\path\to\your\files\file4.dat"
  #File "C:\path\to\your\files\file5.cfg"
  #File "C:\path\to\your\files\file6.log"

  # Create the "icons" folder in the installation directory
  CreateDirectory "$INSTDIR\icons"

  # Add all the icons from a folder (wildcard for all files in the folder)
  SetOutPath "$INSTDIR\icons"
  File "C:\Users\lensh\Documents\GitHub\ArcCAM\\icons\*.*" ; This copies all the files from the icons folder

  # Optionally, create shortcuts for the installed files (e.g., for an EXE)
  #CreateShortCut "$DESKTOP\My Application.lnk" "$INSTDIR\file1.exe"
  #CreateShortCut "$SMPROGRAMS\My Application\My Application.lnk" "$INSTDIR\file1.exe"
  
  #StrCpy $0 $USERNAME
  #StrCpy $1 $APPDATA
  #MessageBox MB_OK "The current Windows username is: $1"
  
	
	
#	${textreplace::FindInFile} "$APPDATA\Moi\moi.ini" "AdditionalCommandsDirs=" "/S=1" $0
#	MessageBox MB_OK 'textreplace::FindInFile$\n$$0={$0}'
#
#	${textreplace::ReplaceInFile} "$APPDATA\Moi\moi.ini" "$APPDATA\Moi\moi.ini.new" "AdditionalCommandsDirs=" "xyz" "/S=1 /C=1 /AO=1" $0
#	MessageBox MB_OK 'textreplace::ReplaceInFile$\n$$0={$0}'
#
#	${textreplace::Unload}

SectionEnd

# Section to uninstall the application
#Section "Uninstall"

  # Remove all files that were installed
#  Delete "$INSTDIR\ArcCAM.js"
#  Delete "$INSTDIR\ArcCAM.htm"
#  Delete "$INSTDIR\Common.js"
  #Delete "$INSTDIR\file4.dat"
  #Delete "$INSTDIR\file5.cfg"
  #Delete "$INSTDIR\file6.log"

  # Remove all files from the icons folder
#  Delete "$INSTDIR\icons\*.*"

  # Remove the icons folder itself
#  RMDir "$INSTDIR\icons"

  # Remove the application directory
#  RMDir "$INSTDIR"

  # Remove shortcuts
  #Delete "$DESKTOP\My Application.lnk"
  #Delete "$SMPROGRAMS\My Application\My Application.lnk"

#SectionEnd
