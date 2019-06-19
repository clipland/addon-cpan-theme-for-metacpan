/*
 * This file is a part of CPAN Theme for MetaCPAN, which has been placed under
 * the GNU GENERAL PUBLIC LICENSE Version 3, 29 June 2007
 *
 * Copyright (c) 2019, Clipland GmbH
 *
 * For brevity, the full license is omitted here but can be obtained at:
 * http://www.gnu.org/licenses/gpl.txt
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 * IN THE SOFTWARE.
 *
 */


// Make packed resources available, docs: https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources
var packed_logo = browser.runtime.getURL("icons/cpan_banner.png");
var packed_favicon = browser.runtime.getURL("icons/cpan_favicon.ico");
var packed_up = browser.runtime.getURL("icons/cpan_up.gif");


// Override CSS rules
var styles = ".big-logo   { background-image: url('"+ packed_logo +"') !important; width: 264px !important; height: 77px !important; }";
styles    += ".small-logo { background-image: url('"+ packed_logo +"') !important; width: 264px !important; height: 77px !important; background-position: 0 0; } .head-small-logo { width: 264px !important; }";
styles    += "body {margin-top: 10px;}";
styles    += "a { color: #069; }";
styles    += ".navbar { border-top: 2px solid #069; }";
styles    += ".navbar-default { border: 0; background-color: #069; font-weight: bold; }";
styles    += ".navbar-default .navbar-nav > li > a { color: #fff; } ";
styles    += ".navbar-default .navbar-nav > li > a:hover { color: #fff; } ";
styles    += ".navbar-default .navbar-nav > .active > a { color: #069; } ";
styles    += ".navbar .nav li.dropdown .dropdown-toggle .caret { border-top-color: #fff !important; }";
styles    += ".page-header { border-bottom: 20px solid #069; } ";
styles    += ".main-content .breadcrumbs { background: #ddd; border-bottom: 1px solid #069; color: #069; font-size: 1.3em; font-weight: normal; margin: 1ex 0; padding: 0.5ex 1ex; padding-top: 0.7ex; } ";
styles    += ".main-content .breadcrumbs a { color: #069; text-decoration: underline; font-weight: bold; } ";
styles    += "a.favorite.highlight { color: #fff !important }";
styles    += "#index-container .index-border { border: 0; font-size: 1.25em; line-height: 20px;}";
styles    += "#index-container li { margin-top:0 !important; line-height: 1.1em !important; }";
styles    += ".main-content h1, .main-content h2, .main-content h3, .main-content h4, .main-content h5, .main-content h6 { color: #069; }";
styles    += ".main-content .fa-bookmark:before { content:url('"+ packed_up +"'); }";
styles    += "pre { border-radius: 2px !important; }";
styles    += ".nav-list-nonsticky { padding-left: 0px; width: 174px; margin-bottom: 0; line-height: 1.54em; float: left; }";
var styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);


// Change favicon to camel
var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = packed_favicon;
document.getElementsByTagName('head')[0].appendChild(link);


// Cut (clone) top nav header
var nav_div = document.getElementsByTagName("nav")[0];
var nav_div_clone = nav_div.cloneNode(true); // clone original
nav_div.parentNode.removeChild(nav_div); // then remove


// Adjust looks of nav header
// Remove metacpan logo on "Home" (unused)
var nav_div_images_nodeList = nav_div_clone.getElementsByTagName('img');
for( var i = nav_div_images_nodeList.length - 1; i > -1; --i ){
	if( nav_div_images_nodeList[i].src.match(/metacpan-icon/) ){
		nav_div_images_nodeList[i].parentNode.removeChild(nav_div_images_nodeList[i]);
		break;
	}
}


// Adjust looks of nav header
// Remove all nav icons
/*
var nav_div_items_nodeList = nav_div_clone.getElementsByTagName('li');
for( var i = nav_div_items_nodeList.length - 1; i > -1; --i ){
	if( nav_div_items_nodeList[i].getElementsByTagName("img") ){
		break;
	}
}
*/


// Insert adjusted header nav at new position above search input
var search_form_nodeList = document.getElementsByClassName("search-form");
var search_form_parent_div = search_form_nodeList[0].parentNode;

search_form_parent_div.insertAdjacentElement('afterbegin', nav_div_clone);


// Sabotage sticky sidebar
var nav_list_nodeList = document.getElementsByClassName("nav-list");
var nav_list_ul = nav_list_nodeList[0];
nav_list_ul.classList.remove("nav-list"); // JS code targets this class, so let's remove it
nav_list_ul.classList.add("nav-list-nonsticky");

