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
- Added PlasmaCAM plasma table script
   

# Installation

	1. Copy the "ArcCAM-main.zip" file to the "C:\users\YOUR WINDOWS USERNAME HERE\AppData\Roaming\Moi" 
 	directory.

	2. Right click the ArcCAM-main.zip file and select "Extract Here" from the pop-up menu.
		This extracts your updated Moi directory with everything need.

	3. Delete the "ArcCAM-main.zip" file, it is not needed anymore and just takes up the space here.

	4. Edit the moi.ini file. You need to change the entry under "[Commands]" to point to your path. 
 	Change:
		"AdditionalCommandsDirs=C:\Users\YOUR WINDOWS USERNAME HERE\AppData\Roaming\MoI\ArcCAM"





## Windows contributor workflow (recommended)

If your git clone is at `C:\Users\lensh\Documents\GitHub\ArcCAM` and MoI uses `C:\Users\lensh\AppData\Roaming\Moi`, this workflow keeps development tight and low-risk.

### 1) Treat the git repo as source of truth

Edit files in the repo first, commit there, then sync to the MoI data folder for runtime testing.

### 2) Use the sync script for fast round-trips

`ArcCAM_push.ps1` now supports both directions:

- Repo -> MoI (default, best for day-to-day testing)
  - `powershell -ExecutionPolicy Bypass -File .\ArcCAM_push.ps1 -Direction ToMoi`
- MoI -> Repo (use if you edited directly in `%AppData%`)
  - `powershell -ExecutionPolicy Bypass -File .\ArcCAM_push.ps1 -Direction ToRepo`

You can also override paths:

- `powershell -ExecutionPolicy Bypass -File .\ArcCAM_push.ps1 -Direction ToMoi -RepoRoot "C:\Users\lensh\Documents\GitHub\ArcCAM" -MoiDataDir "C:\Users\lensh\AppData\Roaming\Moi"`

### 3) Basic local test checklist in MoI

After each change:

1. Sync repo -> MoI.
2. Start/restart MoI.
3. Confirm command bar buttons appear (`ArcCAM`, `PlasmaCAM`, etc.).
4. Run the command you changed and verify dialog flow.
5. Generate code for a tiny known test geometry and inspect output in NC viewer.
6. Verify no regressions in a second command (for example, `Profile` + `Haas Pocket`).

### 4) Suggested smoke-test geometries

Keep a small `.3dm` test file with:

- one closed profile (line/arc mix),
- one circle,
- one group of same-size circles,
- one open curve (for validation/error handling checks).

### 5) Git routine that works well

- Branch per change.
- Keep commits small and single-purpose.
- Include sample expected gcode snippets in PR descriptions.
- If touching post logic, test at least 2 toolpath types before merging.

### 6) Optional: reduce copy friction

If you prefer, you can use directory junctions/symlinks so MoI reads directly from your repo-managed folder, but keep a backup copy first before switching.


## Minimal solo workflow using `work` branch

Use `main` as your known-good branch and `work` as the only branch where day-to-day changes are pushed.

1. One-time setup (inside your ArcCAM repo):

   ```bash
   git checkout -B main
   git checkout -B work
   git push -u origin work
   ```

2. Daily development loop:

   ```bash
   git checkout work
   git pull --ff-only
   # edit files
   git add -A
   git commit -m "<small focused change>"
   git push
   ```

3. If a change is bad, undo quickly on `work`:

   - Safe undo commit:
     ```bash
     git revert <commit_sha>
     git push
     ```
   - Or reset (only if you want history rewritten):
     ```bash
     git reset --hard <good_commit_sha>
     git push --force-with-lease
     ```

4. Promote to stable when ready:

   ```bash
   git checkout main
   git merge --ff-only work
   git push origin main
   ```

This gives you easy rollbacks on `work` while keeping `main` clean and stable.

