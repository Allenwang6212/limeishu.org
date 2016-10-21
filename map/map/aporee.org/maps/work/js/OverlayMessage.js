// The current version of this code is always available at:
// http://www.acme.com/javascript/
//
//
// Copyright © 2006 by Jef Poskanzer <jef@mail.acme.com>.
// All rights reserved.

OverlayMessage = function ( container )
    {
    // Terminology:
    // +-----------------+
    // |wrapper          |
    // |+---------------+|
    // ||container      ||
    // ||   +-------+   ||
    // ||   |overlay|   ||
    // ||   +-------+   ||
    // ||               ||
    // |+---------------+|
    // +-----------------+

    // Get the parent.
    var parent = container.parentNode;

    // Make the wrapper div.
    var wrapper = document.createElement( 'div' );
    wrapper.style.cssText = container.style.cssText;
    parent.insertBefore( wrapper, container );

    // Move the container into the wrapper.
    parent.removeChild( container );
    wrapper.appendChild( container );
    container.style.cssText = 'position: relative; width: 100%; height: 100%;';

    // Add the overlay div.
    this.overlay = document.createElement( 'div' );
    wrapper.appendChild( this.overlay );
    this.visibleStyle = 'position: relative; top: -55%; background-color: ' + OverlayMessage.backgroundColor + '; width: 75%; text-align: center; margin-left: auto; margin-right: auto; padding: 5px; border: 0' + OverlayMessage.borderColor + '; z-index: 100; opacity: .50; filter: alpha(opacity=50);';
    this.invisibleStyle = 'display: none;';
    this.overlay.style.cssText = this.invisibleStyle;
    };


OverlayMessage.backgroundColor = '#a00000';
OverlayMessage.borderColor = '#a00000';


OverlayMessage.prototype.Set = function ( message )
    {
    this.overlay.innerHTML = message;
    this.overlay.style.cssText = this.visibleStyle;
    };


OverlayMessage.prototype.Clear = function ()
    {
    this.overlay.style.cssText = this.invisibleStyle;
    };


OverlayMessage.SetBackgroundColor = function ( color )
    {
    OverlayMessage.backgroundColor = color;
    };


OverlayMessage.SetBorderColor = function ( color )
    {
    OverlayMessage.borderColor = color;
    };
