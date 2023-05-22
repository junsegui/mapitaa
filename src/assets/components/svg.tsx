import React, { useEffect,useRef } from "react";


export const MySVGComponent = () => {
     const svgRef = useRef<SVGSVGElement>(null);
     
   const handleClick = (event:React.MouseEvent<SVGRectElement>) =>{
      console.log("click")
   }
   useEffect(() => {
    const svgElement = document.getElementById('my-svg');
    if (svgElement) {
      const values = getSVGValues(svgElement);
      console.log(values);
    }
    
  }, []);

  useEffect(() => {
    const svgElement = svgRef.current;
    if (svgElement) {
      const rectElements = svgElement.getElementsByTagName('rect');
      for (let i = 0; i < rectElements.length; i++) {
        rectElements[i].addEventListener('click', handleRectClick);
      }
    }

    return () => {
      const svgElement = svgRef.current;
      if (svgElement) {
        const rectElements = svgElement.getElementsByTagName('rect');
        for (let i = 0; i < rectElements.length; i++) {
          rectElements[i].removeEventListener('click', handleRectClick);
        }
      }
    };
  }, []);
   const handleRectClick = (event: Event) => {
      const rect = event.target as SVGRectElement
      const id= rect.getAttribute("id")
    console.log(id);
  };


  const getSVGValues = (element: Element): any => {
    const values: any[] = [];

    const rectElements = element.getElementsByTagName('rect');
    for (let i = 0; i < rectElements.length; i++) {
      const rectElement = rectElements[i];
      const x = rectElement.getAttribute('x');
      const y = rectElement.getAttribute('y');
      const width = rectElement.getAttribute('width');
      const height = rectElement.getAttribute('height');
       const id = rectElement.getAttribute('id');
       


      values.push({ x, y, width, height,id });
    }

    const childElements = element.children;
    for (let i = 0; i < childElements.length; i++) {
      const childElement = childElements[i];
      const childValues = getSVGValues(childElement);
      values.push(...childValues);
    }

    return values;
  };




      return (
        <svg
          version="1.1"
          id="my-svg"
          width="3456"
          height="2304"
          viewBox="0 0 3456 2304"
          xmlns="http://www.w3.org/2000/svg"
          ref={svgRef}>
          <defs id="defs6" />

          <g id="g10" transform="matrix(1.3333333,0,0,-1.3333333,0,2304)">
            <rect
              id="office1"
              width="59.24651"
              height="35.08292"
              x="1310.0421"
              y="-349.87616"
              transform="scale(1,-1)"
   
            />
            <rect
              id="rect172-8"
              width="58.342758"
              height="35.088551"
              x="1369.9707"
              y="-349.85995"
              transform="scale(1,-1)"
          
            />
            <rect
              id="rect172-8-4-5"
              width="28.779123"
              height="37.860168"
              x="1340.6519"
              y="-314.16577"
              transform="scale(1,-1)"
            />
            <rect
              id="rect172-8-4-5-0"
              width="28.051035"
              height="37.86697"
              x="1369.9275"
              y="-314.14264"
              transform="scale(1,-1)"
            />
            <rect
              id="rect172-8-4-5-5"
              width="30.190035"
              height="37.847229"
              x="1309.8926"
              y="-314.15967"
              transform="scale(1,-1)"
            />
            <rect
              id="rect172-8-4-5-5-1"
              width="30.190035"
              height="37.847229"
              x="1398.2861"
              y="-314.17117"
              transform="scale(1,-1)"
            />
          </g>
        </svg>
      );
    }
