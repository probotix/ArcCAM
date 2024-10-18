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
Returns `true` if the given directory exists.  

**moi.filesystem.shellExecute( Path, Parameters, WaitForFinished );**  
- Arg 1 (required) - path to file. Could be an executable or a data file which will  
  open it in whatever the OS has registered to handle that file extension type.  
- If given an executable program file, command line parameters can be given by  
  optional Arg2, and if Arg3 is `true` it will wait for the launched program to finish  
  before returning from `shellExecute()`.  
- When using `WaitForFinished`, the return value is a dictionary object with `exitCode` and `output` properties.  
  `exitCode` contains the numeric exit code value and `output` contains any text written to stdout.  

**moi.filesystem.deleteFile( path );**  
Deletes the given file.  

**moi.filesystem.copyFile( ExistingPath, NewPath, FailIfExists );**  
- Required Args 1 and 2 give the path to the existing file, and the  
  path to the new file.  
- `FailIfExists` is an optional value. If set to `true`, the operation will not overwrite an existing file.  
  Default is `false`.  

**moi.filesystem.getProcessDir();**  
Returns path to where application binaries are installed.  
On Windows, returns the path to where `MoI.exe` is located.  
On Mac, returns the full path to `/Contents/Resources/` inside the app bundle.  

**moi.filesystem.getTempDir();**  
Returns path to the TEMP folder.  

**moi.filesystem.getAppDataDir();**  
Returns path to the Moi AppData folder.  
On Windows this is: `%AppData%\Moi`, and on Mac  
it's `~/Library/Application Support/Moi`.  

**moi.filesystem.getUIDir();**  
Returns path to the UI folder inside the install directory.  

**moi.filesystem.getCommandsDir();**  
Returns path to the Commands folder inside the install directory.  

**moi.filesystem.toNativePath( filename );**  
Given a script path (using `z:\` on Mac) returns native OS path.  

**moi.filesystem.toScriptPath( filename );**  
Given a native OS path converts it to a script path.  

---

### The FileStream Object

The `FileStream` object has these functions:

- `.readLine()` - reads a line of text from the stream, the text is the return value of the function.
- `.writeLine( text )` - writes a line of text to the stream.
- `.atEOF` property - returns `true` if the stream is at the end with nothing more to read from it.
- `.close()` - closes the stream.
- `.setWriteBOM()` - sets whether to write the byte order mark at the front of the text file, default is no BOM.
- `.setCodec( name )` - controls the encoding to use for reading or writing. Supported codecs are listed here:  
  [Qt Documentation on QTextCodec](http://doc.qt.io/qt-5/qtextcodec.html#details)
