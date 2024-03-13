import Script from "next/script";

const MetricoolAnalytics = ({ ga_id }: { ga_id: string }) => (
  <>

    <Script
      id="Metricool-analytics"
      dangerouslySetInnerHTML={{
        __html: `
        function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"${ga_id}"})})
        `,
      }}
    ></Script>
  </>
);
export default MetricoolAnalytics;