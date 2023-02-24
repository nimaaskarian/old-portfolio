import React from "react";
import { useState,useEffect } from "react";
import { Progress, ProgressWrapper } from "./style";

const progressFactor = 950;
const ProgressBar = ({ title, progressPercentage }) => {
  const [percentageAnimation,setPercentageAnimation] = useState(0);
  useEffect(()=>{
    let id;
    if (progressPercentage)
      id = setTimeout(() => {
        if (percentageAnimation < progressPercentage) {
          setPercentageAnimation(percentageAnimation+progressPercentage/progressFactor)
        }
        else {
          setPercentageAnimation(progressPercentage)
          clearInterval(id);
        }
        
      }, progressPercentage/progressFactor);
    return ()=>{
      clearInterval(id);
    }
  }, [progressPercentage,percentageAnimation])
  return (
    <div>
      <p>{title}</p>
      <ProgressWrapper>
        <Progress percentage={progressPercentage}>
          {Math.round(percentageAnimation)}%
        </Progress>
      </ProgressWrapper>
    </div>
  );
};

export default ProgressBar;
