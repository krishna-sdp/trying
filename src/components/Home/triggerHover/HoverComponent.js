import Link from "next/link";
import React, { useState, useRef } from 'react';

export default function HoverComponent({ link ,toggleHover}) {


  const onMouseMove = ( and ) => {     
    if (hoveringIcon) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    const newX = e.clientX - left;
    const newY = e . clientY - top ;
    const absDeltaX = Math.abs(mousePosition.x - newX);
    const absDeltaY = Math . abs ( mousePosition . y - newY ) ;
    setMovementAnimation([
      absDeltaX * .5,
      absDeltaY * .5,
      1 - absDeltaY * 0.005,
      1 - absDeltaX * 0.005
    ]);
    setMousePosition ( { x : newX , y : newY } ) ; 
  }

  const containerRef = useRef();
  return (
    <Link href={link}>
      <a
            ref={containerRef}
            onMouseMove={onMouseMove}
      id="this_isCursor"
        className={`hover no-underline coupontooltip ${toggleHover?"flex":"dn"}`}
      >
        <div className="regular-font vie">
          read <br /> more
        </div>
      </a>
    </Link>
  );
}
