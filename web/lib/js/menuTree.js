function Folder(folderDescription, hreference, id) //constructor
{
	//constant data
	this.desc = folderDescription
	this.hreference = hreference
	this.id = id;
	this.navObj = 0
	this.children = new Array
	this.nChildren = 0
	this.level = 0
	this.leftSideCoded = ""
	
	//menuflag
	this.menuflag = -1

	//dynamic data
	this.isOpen = false
	this.isRendered = 0
	this.rendernow = 0 /*render or not*/

	//methods
	this.initialize = initializeFolder
	this.setState = setStateFolder
	this.addChild = addChild
	this.createIndex = createEntryIndex
	this.escondeBlock = escondeBlock
	this.esconde = escondeFolder
	this.mostra = mostra
	this.renderOb = drawFolder
	this.subLayerStart = subLayerStart
	this.totalHeight = totalHeight
	this.subEntries = folderSubEntries
	this.blockStartHTML = blockStartHTML
	this.blockEndHTML = blockEndHTML
}

function initializeFolder(level, leftSide)
{
	var j=0
	var i=0
	nc = this.nChildren

	this.createIndex()	//id index
	this.level = level
	this.leftSideCoded = leftSide

	if (browserVersion == 0)
	this.isOpen=true;

	if (level > 1)
	leftSide = leftSide + "0"

	if (nc > 0)
	{
	level = level + 1
	for (i=0 ; i < this.nChildren; i++)
	{
		this.children[i].initialize(level, leftSide)
	}
	}
}

function drawFolder()
{
	var docW = ""
	var leftSide = leftSideHTML(this.leftSideCoded)

	this.isRendered = 1

	if ( this.level > 0){
		if ( this.level == 1){
			docW = docW + "<li id=" + this.id ;
			docW = docW + ' class="navLevel1">'
			docW = docW + "<A class=Fstmenuoff	href='" + this.hreference + "' TARGET='mainFrame' ";
			if (browserVersion > 0)
				docW = docW + " onClick='javascript:ClickonFristFolder(\"" + this.id + "\",\"" + this.desc + "\")'";
			docW = docW + ">" + this.desc + "</A>";
			docW = docW + "</li>"
			}
		else if ( this.level == 2){
			docW = docW + "<li id=" + this.id ;
			docW = docW + ' class="navLevel2">';
			docW = docW + "<A class=Secmenuoff	href='" + this.hreference + "' TARGET='mainFrame' ";
			if (browserVersion > 0)
				docW = docW + " onClick='javascript:ClickonFristFolder(\"" + this.id + "\")'";
			docW = docW + ">" + this.desc + "</A>";
			docW = docW + "</li>";
			docW = docW + '<li class="navLevel2Line"></li>';
			}
		else if ( this.level > 2){
			docW = this.blockStartHTML("folder");
			docW = docW + "<li id=" + this.id;
			docW = docW + ' class="navLevel3">';
			docW = docW + "<A class=Thdmenuoff	href='" + this.hreference + "' TARGET='mainFrame' ";
			if (browserVersion > 0)
				docW = docW + " onClick='javascript:ClickonFristFolder(\"" + this.id + "\")'";
			docW = docW + ">" + leftSide + this.desc + "</A>";
			docW = docW + "</li>"
			docW = docW + this.blockEndHTML()
			}
		}
	return docW
}

function StartLayerHTML(idprefix) {
	var idParam = "id='" + idprefix + this.id + "'"
	var docW = ""

	if (browserVersion == 2)
	docW = "<layer "+ idParam + " top=" + doc.yPos + " >"
	else if (browserVersion == 1)
	docW = "<div " + idParam + " >"

	return docW
}

function StartMenuLayer(idprefix) {
	var idParam = "id='" + idprefix + "'";
	var docW = "";

	docW = "<div " + idParam + " >";
	return docW;
}

function EndLayerHTML() {
	var docW = ""
	docW = docW + "</div>"
	return docW;
}

function subLayerStart(idprefix)	//Secmenu or Thdmenu
{
	var idParam = "id='" + idprefix + this.id + "'";
	var docW = "";

	docW = "<div " + idParam + ">";
	return docW;
}

function subLayerEnd(idprefix) 
{
	var docW = "</div>";
	return docW;
	if (idprefix == "Secmenu"){
		docW = docW + "<TD>&nbsp;</TD>"
		docW = docW + "</TR>"
		docW = docW + "</TBODY></TABLE>"
	
		if (browserVersion == 2)
		docW = docW + "</layer>"
		else if (browserVersion == 1)
		docW = docW + "</div>"
	}else{
		docW = docW + "</TBODY></TABLE></TD></TR>"		
	}

	return docW
}

function setStateFolder(isOpen)
{
	var subEntries
	var totalHeight
	var fIt = 0
	var i=0
	var currentOpen

	if (isOpen == this.isOpen)
	return
/*
	if (browserVersion == 2 && this.level > 2)
	{
	totalHeight = 0
	for (i=0; i < this.nChildren; i++)
		totalHeight = totalHeight + this.children[i].navObj.clip.height
		subEntries = this.subEntries()
	if (this.isOpen)
		totalHeight = 0 - totalHeight
	for (fIt = this.id + subEntries + 1; fIt < nEntries; fIt++)
		indexOfEntries[fIt].navObj.moveBy(0, totalHeight)
	}
*/
	this.isOpen = isOpen;

	propagateChangesInState(this)
}

function propagateChangesInState(folder)
{
	var i=0
	for (i=folder.nChildren-1; i>=0; i--)
	{
		if (folder.isOpen)
			folder.children[i].mostra();
		else
			folder.children[i].esconde();
	}
}

function escondeFolder()
{
	this.escondeBlock()
	this.setState(0)
}

function addChild(childNode)
{
	this.children[this.nChildren] = childNode
	this.nChildren++
	return childNode
}

function folderSubEntries()
{
	var i = 0
	var se = this.nChildren

	for (i=0; i < this.nChildren; i++){
	if (this.children[i].children) //is a folder
		se = se + this.children[i].subEntries()
	}

	return se
}

// Methods common to both objects (pseudo-inheritance)
//hiden
function escondeBlock()
{
	var NAVObj = this.navObj;
	
	if (browserVersion == 1) {
	NAVObj.style.display = "none"
	} else {
	NAVObj.visibility = "hiden"
	}
}

//show
function mostra()
{
	var NAVObj = this.navObj;
	
	if (!this.isRendered)
	this.renderOb();
	else
	if (browserVersion == 1)
		NAVObj.style.display = "block"
	else
		NAVObj.visibility = "show"
}

function blockStartHTML(idprefix) {
	var idParam = "id='" + idprefix + this.id + "'"
	var docW = "<div " + idParam + " >"
	return docW;
	
	if (browserVersion == 2)
	docW = "<layer "+ idParam + " top=" + doc.yPos + " >"
	else if (browserVersion == 1)
	docW = "<div " + idParam + " >"

	docW = docW + "<TABLE class=Thdmenu cellSpacing=1 cellPadding=0 width=144 border=0>"
	docW = docW + "<TBODY>"

	return docW
}

function blockEndHTML() {
	var docW = "</div>"
	return docW
}

function createEntryIndex()
{
	indexOfEntries[this.id] = this;
}

// total height of subEntries open
function totalHeight() //used with browserVersion == 2
{
	var h = this.navObj.clip.height
	var i = 0

	if (this.isOpen) //is a folder and _is_ open
	for (i=0 ; i < this.nChildren; i++)
		h = h + this.children[i].totalHeight()

	return h
}

function leftSideHTML(leftSideCoded) {
	var i;
	var retStr = "";

	for (i=1; i<leftSideCoded.length; i++)
	{
		if (leftSideCoded.charAt(i) == "0")
		{
			retStr = retStr + "&nbsp;&nbsp;&nbsp;"
		}
	}
	return retStr
}

// Events
function ClickonFristFolder(folderId,folderdesc)
{

	var clicked = indexOfEntries[folderId]

	changebg(folderId,clicked);
	
	// open only current folder, and close other siblings
	var folder;
	for(var key in indexOfEntries){
		var folder = indexOfEntries[key];
		if ( clicked.level == folder.level &&
			folder.isOpen == true ) {
			folder.setState(false);
		}
	}
	
	clicked.setState(true)
	if (clicked.level < 2)
		clicked.children[0].setState(true);
	/*if (clicked.level == 1)
	getElById('guide').innerHTML = folderdesc;	*/
}

//change background images or background color 
function changebg(changedid,nodeclicked){
		for(var key in indexOfEntries){
			var changed = indexOfEntries[key];
			if (changedid==changed.id){
				if (changed.level == 1){
					if ( /*browsernetscape ==*/ 1 )
					{
						getElById(changed.id).className="navLevel1Selected";
					}
						// getElById("f" + changed.id).bgColor= "#427594"	;
					else
						getElById(changed.id).background="pic/bg_firstmenu_blue.jpg";				
				}
				else if (changed.level == 2 ){
						getElById(changed.id).className="navLevel2Selected"	;
				}
				else if (changed.level > 2 ){
					if ( /*browsernetscape ==*/ 1 )
						getElById(changed.id).bgColor= ""	;
					else
						getElById(changed.id).background="pic/bg_thirdmenu_on.jpg";										
				}				
			}
			else if ((changed.level == nodeclicked.level)||(changed.level > nodeclicked.level)){
				if (changed.level == 1 ){
					if ( /*browsernetscape ==*/ 1 )
						//getElById("f" + changed.id).bgColor= "#EF8218"	;
						 getElById(changed.id).className="navLevel1";
					else
						getElById(changed.id).background="pic/bg_firstmenu_orange.jpg";					
				}
				else if (changed.level == 2){
						getElById(changed.id).className = "navLevel2"	;
				}
				else if (changed.level > 2){
					if ( /*browsernetscape ==*/ 1 )
						getElById(changed.id).bgColor= ""	;
					else
						getElById(changed.id).background="pic/bg_thirdmenu_off.jpg";										
				}				
		}
	}
}

// Auxiliary Functions
function gFld(description, hreference, menuId)
{
	folder = new Folder(description, hreference, menuId)
	return folder
}

function insFld(parentFolder, childFolder)
{
	return parentFolder.addChild(childFolder)
}

var docWA = ""; //
var docWF = ""; //part for frist menu
var docWS = ""; //part for seconde menu
var docWT = ""; //part for third menu and over

function renderAllTree(nodeObj,flag) {
	var i=0;
		
	//which level
	var docW = "";
	
	if(flag == "0")
	{
		nodeObj.rendernow = 1;

		docWF += StartMenuLayer("Fstmenu");
		for (i=0 ; i < nodeObj.nChildren; i++) {
			if ( nodeObj.children[i].rendernow != 1 ){
				nodeObj.children[i].rendernow = 1 ;
				renderAllTree(nodeObj.children[i],"frist")
			} 
		}
		
		var j=6-nodeObj.nChildren;
		for ( ; j > 0; j--)
		{
			docWF += "<li class='navLevel1'></li>"
		}
		docWF += "</div>";
	}
	else if (flag == "frist") 
	{
		docWF += nodeObj.renderOb();
		nodeObj.rendernow = 1;
		
		docWS += nodeObj.subLayerStart("Secmenu");
		for (i=0 ; i < nodeObj.nChildren; i++) {
			if (i != 0 && i %8 == 0){
				/*dengfang, 20110401, do not change line in the second menu*
				docWS += "</TR>"
				docWS += "<TR height=20 align=middle bgcolor=#427594>"
				*/
			}
			if ( nodeObj.children[i].rendernow != 1 ){
				nodeObj.children[i].rendernow = 1 ;
				renderAllTree(nodeObj.children[i],"second");
			}
		}

		if (i < 8)
		{
			docWS += '<li class = "navLevel2" >&nbsp;</li>';
		}
		docWS += "</div>";
	
	}
	else if (flag == "second") 
	{

		docWS += nodeObj.renderOb();
		nodeObj.rendernow = 1;

		for (i=0 ; i < nodeObj.nChildren; i++){
			if ( nodeObj.children[i].rendernow != 1 ){
				nodeObj.children[i].rendernow = 1 ;
				renderAllTree(nodeObj.children[i],"third");
			}
		} 
	}
	else if (flag == "third") 
	{
		docWT += nodeObj.renderOb();
		nodeObj.rendernow = 1;

		for (i=0 ; i < nodeObj.nChildren; i++){
			if ( nodeObj.children[i].rendernow != 1 ){
				nodeObj.children[i].rendernow = 1 ;
					renderAllTree(nodeObj.children[i],"third");
			}
		} 
	}

}

function hideWholeTree(nodeObj, hideThisOne, nodeObjMove) {
	var i=0;
	var heightContained=0;
	var childrenMove=nodeObjMove;

	if (hideThisOne)
	nodeObj.escondeBlock();
	for (i=0 ; i < nodeObj.nChildren; i++) {
	heightContainedInChild = hideWholeTree(nodeObj.children[i], true, childrenMove)
	}

	return heightContained;
}

function getElById(idVal) {
	if (document.getElementById != null)
	return document.getElementById(idVal)
	if (document.all != null)
	return document.all[idVal]
	
	alert("Problem getting element by id")
	return null
}

//Other variables
indexOfEntries = new Array
nEntries = 0
browserVersion = 0 
doc = document
doc.yPos = 0
browsernetscape = 0

//set all nodes's navObj
function setallnavobj(nodeObj,parentid)
{
	var idparam = ""
	if ( nodeObj.level == 0){
		idparam = "topLayer"
		}
	else if ( nodeObj.level == 1){
		idparam = "Fstmenu"
		}
	else if ( nodeObj.level == 2){
		idparam = "Secmenu" + parentid
		}
	else {
		idparam = "folder" + nodeObj.id
	}
	
	nodeObj.navObj = getElById(idparam);
	for (var i=0 ; i < nodeObj.nChildren; i++) {
		setallnavobj(nodeObj.children[i],nodeObj.id)
	}
}

// Main function
function initializeDocument()
{
	var docW = "";
	xbDetectBrowser();
	
	foldersTree.initialize(0, "0");
	renderAllTree(foldersTree,"0");
	$("#MenuLevel1").append(docWF);
	$("#MenuLevel2").append(docWS);
	$("#MenuLevel3").append(docWT);
	//alert(docWF);
	//alert(docWS);
	//alert(docWT);
	setallnavobj(foldersTree)

	if (browserVersion != 0)
		hideWholeTree(foldersTree, false, 0);

	if (browserVersion == 2)
	doc.write("<layer top=" + indexOfEntries[nEntries-1].navObj.top + ">&nbsp;</layer>")

	if (browserVersion != 0) {
	var clickedFolder;
	
	clickedFolder = indexOfEntries["MENU_TOP"];
	
	changebg(clickedFolder.children[0].id,clickedFolder.children[0]);	//��ҳ״̬����һ��һ���˵����ͼƬΪ��ɫ��
	clickedFolder.setState(true);
	clickedFolder.children[0].setState(true);
	clickedFolder.children[0].children[0].setState(true);
	}
}

function xbDetectBrowser()
{
	var oldOnError = window.onerror;

	window.onerror = null;

	// work around bug in xpcdom Mozilla 0.9.1
	window.saveNavigator = window.navigator;

	var ua = window.navigator.userAgent.toLowerCase();

	if ((ua.indexOf('gecko') != -1)){browsernetscape =1;} 
	if ((ua.indexOf('msie') != -1) || (ua.indexOf('konqueror') != -1) || (ua.indexOf('gecko') != -1))
	{
	browserVersion = 1;
	}
	else if ((ua.indexOf('mozilla') !=-1) && (ua.indexOf('spoofer')==-1) && (ua.indexOf('compatible') == -1) && (ua.indexOf('opera')==-1)&& (ua.indexOf('webtv')==-1) && (ua.indexOf('hotjava')==-1))
	{
	browserVersion = 2;
	}
	else
	{
	browserVersion = 0;
	}

	window.onerror = oldOnError;
}

/*
 * ��ȡ��ǰҳ��߶�s
 */
 function getBodyHeiht(doc)
 {
	 return (doc.all) ? doc.body.offsetHeight : doc.body.scrollHeight;
 }
 
 /**
  *	��ȡ��Ƕҳ�и߶�
  */
function getFrameHeight(mFrame)
{
	var h1 = mFrame.document.body.offsetHeiht;
	var h2 = mFrame.document.body.scrollHeight;
	if  (mFrame.moduleRight != null)
	{
		var h3 = mFrame.moduleRight.document.body.scrollHeight;
		if (h3 > h2) h2 = h3;
	}
	return h2;
}

function Resizeiframe()
{
	getElById('mainFrameid').style.height=531; 
	var mainbody = mainFrame.document.body.scrollHeight;
	//var trmainbody = getElById('trmain').clientHeight;
	var trmainbody =1000 ;
	var mainbodyoffset = getElById('mainFrameid').offsetHeight;
	var end = mainbody;
	if (end < (trmainbody-31))
		end = trmainbody-31;
	getElById('mainFrameid').style.height=end + 100;	//must be id
}

	

function getSelect(item)
{
	var idx;
	if (item.options.length > 0) {
		idx = item.selectedIndex;
		return item.options[idx].value;
	}
	else {
		return '';
	}
}

function setSelect(item, value)
{
	for (i=0; i<item.options.length; i++) {
		if (item.options[i].value == value) {
			item.selectedIndex = i;
			break;
		}
	}
}
