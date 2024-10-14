# ArcCAM

  ArcCAM is a simple CAM plug-in for Moi3D written by Len Shelton of PROBOTIX.
  
	Moi3D (www.moi3d.com) offers the most powerful and user-friendly drawing tools available in any 
 	software today. The aim of this project is to develop a CAM plug-in for Moi3D that generates and 
  	exports tool paths for CNC machines. This CAM software will be designed to produce optimized gcode, 
   	leveraging the advanced gcode controls used by modern CNC machines.
	
	I've included a slightly modified version of OrderCurves in this repository until I have that 
	functionality built into ArcCAM. 
  
	Features:
	- Identify true arcs and use G2 and G3 arcs whenever possible
	- Utilize the CNC controls built-in canned cycles (G8x), subroutines, and pocketing operations.
	- Integrate tool diameter compensation (G41 & G42)
	

    git clone https://github.com/probotix/ArcCAM

	You can preview the gcode output here: https://ncviewer.com/

# Changelog
- First crack. Able to generate simple tool paths for import into Haas CNC controls.
   

# Installation

	1. Copy the "Death UI.rar" file to the "C:\users\YOUR WINDOWS USERNAME HERE\AppData\moi" directory. You should see it and the license files, nothing more.

	2. Right click the Death UI.rar file and select "Extract Here" from the pop-up menu.
		This extracts your updated Moi directory with everything need.

	3. Delete the "Death UI.rar" file, it is not need anymore and just takes up the space here.

	4. Edit the moi.ini file. You need to change the entry under "[Commands]" to point to your path. Change the
			"AdditionalCommandsDirs=C:\Users\Jack\AppData\Roaming\MoI\extras"
		to:
			"AdditionalCommandsDirs=C:\Users\YOUR WINDOWS USERNAME\AppData\Roaming\MoI\extras"

		This will enable the EXTRAS scripts within Moi for you.

	5.) copy the "Reverse.png" image from the new "C:\Users\YOUR WINDOWS USERNAME\AppData\Roaming\MoI\ui" to the:
		"C:\Program Files\Moi 4.0\ui" directory



