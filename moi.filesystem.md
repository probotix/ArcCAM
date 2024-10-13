# moi.filesystem

# Moi3D Filesystem Functions

**moi.filesystem.incrementFileName( filename );**  
Increment a file name. For example File01.txt becomes File02.txt.  
Arg1 = input filename.  
Return value = incremented filename.  

**moi.filesystem.getCompactPath( filename );**  
Arg1 = Input filename.  
Arg2 = Target number of characters to try and fit.  
Return value = filename with paths removed if full path exceeds target limit.  

**moi.filesystem.getFileNameFromPath( fullpath );**  
Arg1 = filename with full path  
Return value = just the file name portion of the path, no directory.  

**moi.filesystem.getOpenFileName( DialogTitle, Filters );**  
Function for a script to be able to show the open file name dialog.  
The filter string has entries separated by the pipe `|` character, with  
the entries in pairs with a label first and then a filter next, for example:  
`'Point files (*.txt, *.xyz, *.csv)|*.txt;*.xyz;*.csv|All files (*.*)|*.*'`  
returns filename or empty string if dialog was canceled.  

**moi.filesystem.getSaveFileName( DialogTitle, Filters );**  
Function for a script to be able to show the save file name dialog.  
The filter string has entries separated by the pipe `|` character, with  
the entries in pairs with a label first and then a filter next, for example:  
`'Point files (*.txt, *.xyz, *.csv)|*.txt;*.xyz;*.csv|All files (*.*)|*.*'`  
returns empty string if dialog was canceled.  

**moi.filesystem.getPathDelimiter();**  
Returns the native path delimiter for the OS. For Windows it's `\` and on Mac it's `/`.  
It's usually possible to write cross-platform code without using this because  
on Mac, script functions that take file names will accept Windows-like path names  
using `z:\`.  

**moi.filesystem.processFileNameToUI( scriptpath );**  
Given a script path, return the native path to be used for showing in any UI controls.  

**moi.filesystem.processFileNameFromUI( nativepath );**  
Given a native path, return the script path.  

**moi.filesystem.openFileStream( filename, mode );**  
Creates a file stream object that can read or write content to the given filename.  
Mode can be `'r'` for read, or `'w'` for write.  

**moi.filesystem.getFiles( path, filter );**  
Given a directory name and a filter string, return a list of files within that directory.  
For example:  
`var files = moi.filesystem.getFiles( 'c:\\scripts\\iges', '*.igs' );`  
Filter can be a semicolon-delimited list of filters.  

**moi.filesystem.getDirs( path, filter );**  
Given a directory name and an optional filter string, return a list of sub-directories within that directory.  
For example:  
`var dirs = moi.filesystem.getDirs( 'c:\\', 'p*' );`  
Filter can be a semicolon-delimited list of filters.  

**moi.filesystem.fileExists( filename );**  
Returns `true` if the given file exists.  

**moi.filesystem.dirExists( filename );**  

