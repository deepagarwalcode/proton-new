import React from 'react'
import { AlertTriangle, Plus, Zap } from 'lucide-react'

interface ProblemPoint {
  headline: string
  description: string
}

interface SolutionPoint {
  headline: string
  description: string
}

interface ComparisonProps {
  problemIntro?: string
  problemPoints?: ProblemPoint[]
  problemConclusion?: string
  solutionIntro?: string
  solutionPoints?: SolutionPoint[]
  solutionConclusion?: string
}

const Comparison: React.FC<ComparisonProps> = ({
  problemIntro = "Too many 'conversion' tactics, none of which work.",
  problemPoints = [
    {
      headline: "Poor Design",
      description: "Representation defines positioning."
    },
    {
      headline: "Unclear Messaging",
      description: "Buyers are confused, not unqualified."
    },
    {
      headline: "Unnecessary Fluff",
      description: "Fluff kills conversion."
    }
  ],
//   problemConclusion = "Most SaaS/Tech teams are forced to throw more people and budget at these problems, which just drives costs up without fixing the root cause.",
  solutionIntro = "TRUST beats every conversion tactic.",
  solutionPoints = [
    {
      headline: "Clean and Professional Design",
      description: "Design that positions you above competitors."
    },
    {
      headline: "Conversion Clarity Focus",
      description: "Clear Messaging + Custom Visuals = Clarity."
    },
    {
      headline: "Clear and Concise",
      description: "We only keep sections your ICP cares about."
    }
  ],
//   solutionConclusion = "This focus has recovered $6M+ in ARR for SaaS/Tech teams in the last 12 months."
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 py-20 max-w-7xl mx-auto p-6">
      {/* Left Column: The Problem */}
      
      <div className="bg-[#161616] border-4 border-red-500 rounded-2xl p-8">
        <h2 className="text-4xl font-semibold text-white mb-2 clash-display">The Problem</h2>
        <p className="text-white mb-8 text-lg">{problemIntro}</p>
        
        <div className="space-y-6">
          {problemPoints.map((point, index) => (
            <div key={index}>
              <div className="flex items-start gap-4 mb-3">
                <AlertTriangle className="w-8 h-8 text-red-500 shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{point.headline}</h3>
                  <p className="text-gray-300">{point.description}</p>
                </div>
              </div>
              {index < problemPoints.length - 1 && (
                <div className="border-t border-[#323232] mt-6"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* <p className="text-white mt-8 text-lg">{problemConclusion}</p> */}
      </div>

      {/* Right Column: The Solution */}
      <div className="bg-[#161616] border-4 border-green-500  rounded-2xl p-8">
        <h2 className="text-4xl font-semibold text-white mb-2 clash-display">The Solution</h2>
        <p className="text-white mb-8 text-lg">{solutionIntro}</p>
        
        <div className="space-y-6">
          {solutionPoints.map((point, index) => (
            <div key={index}>
              <div className="flex items-start gap-4 mb-3">
                <Plus className="w-8 h-8 text-white shrink-0 mt-1 bg-green-500 rounded-full aspect-square p-1" strokeWidth={3} />
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">{point.headline}</h3>
                  <p className="text-gray-200   ">{point.description}</p>
                </div>
              </div>
              {index < solutionPoints.length - 1 && (
                <div className="border-t border-[#323232] mt-6"></div>
              )}
            </div>
          ))}
        </div>
        
        {/* <p className="text-white mt-8 text-lg font-medium">{solutionConclusion}</p> */}
      </div>
    </div>
  )
}

export default Comparison