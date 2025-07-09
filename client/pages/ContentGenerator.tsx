import { useState } from "react";
import {
  ArrowLeft,
  Wand2,
  Camera,
  Sparkles,
  ChevronRight,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

export default function ContentGenerator() {
  const navigate = useNavigate();
  const [showAIDemo, setShowAIDemo] = useState(false);
  const [showTextInput, setShowTextInput] = useState(false);
  const [aiPrompt, setAiPrompt] = useState("");

  const demoContent = `**Water Cycle Explanation with Local Examples**

🌧️ **The Water Cycle in India**

The water cycle is nature's way of recycling water! Let's understand it with examples from our beautiful India:

**1. Evaporation (भाप बनना)**
- When the sun heats up the Ganges River or village ponds
- Water turns into invisible water vapor (like steam from chai!)
- The Arabian Sea and Bay of Bengal contribute lots of water vapor

**2. Condensation (संघनन)**
- Water vapor rises up and cools down in the sky
- Forms tiny droplets that create clouds
- Just like when you breathe on a cold morning in Delhi winter!

**3. Precipitation (वर्षा)**
- Clouds become heavy and release water as rain
- Monsoon rains in Kerala, Rajasthan desert getting rare showers
- Snow in Kashmir mountains

**4. Collection (संग्रह)**
- Rain fills our rivers like Yamuna, lakes, and groundwater
- Water flows back to oceans
- Cycle starts again!

**Fun Activity:** Ask students to observe water evaporation from their courtyard after cleaning!`;

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
      <div className="p-6">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-xl font-semibold text-primary ml-2">
            Smart Content Generator
          </h1>
        </div>

        {/* Main Options */}
        <div className="space-y-6">
          {/* Generate with AI Card */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur hover:shadow-2xl transition-all cursor-pointer">
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-sage/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <Wand2 className="h-8 w-8 md:h-10 md:w-10 text-sage" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-charcoal-500 mb-2">
                    Generate with AI
                  </h2>
                  <p className="text-charcoal-400 mb-4 text-sm md:text-base">
                    Create content instantly with artificial intelligence
                  </p>

                  {/* Demo Preview */}
                  <div className="bg-gradient-to-r from-sage/10 to-primary/10 rounded-xl p-3 md:p-4 mb-4">
                    <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
                      <Sparkles className="h-4 w-4 text-sage" />
                      <Badge variant="secondary" className="text-xs">
                        Demo Prompt
                      </Badge>
                    </div>
                    <p className="text-sm text-charcoal-500 italic mb-3">
                      "Explain water cycle using local examples"
                    </p>
                    <div className="bg-white/80 rounded-lg p-3 border-l-4 border-sage">
                      <p className="text-xs text-charcoal-400">
                        🌧️ The water cycle is nature's way of recycling water!
                        In India, when the sun heats the Ganges River...
                      </p>
                    </div>
                  </div>

                  <Button
                    onClick={() => setShowAIDemo(true)}
                    className="bg-sage hover:bg-sage/90 text-white w-full md:w-auto"
                    size="sm"
                  >
                    Try this example
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Snap & Create Card */}
          <Card
            className="border-0 shadow-xl bg-white/90 backdrop-blur hover:shadow-2xl transition-all cursor-pointer"
            onClick={() => navigate("/camera-capture")}
          >
            <CardContent className="p-4 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="bg-orange/20 rounded-full w-16 h-16 md:w-20 md:h-20 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <Camera className="h-8 w-8 md:h-10 md:w-10 text-orange" />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h2 className="text-xl md:text-2xl font-bold text-charcoal-500 mb-2">
                    Snap & Create
                  </h2>
                  <p className="text-charcoal-400 mb-4 text-sm md:text-base">
                    Photo to worksheets in seconds
                  </p>

                  {/* Example Images */}
                  <div className="flex items-center space-x-2 md:space-x-4 mb-4">
                    <div className="bg-cream-100 rounded-lg p-2 md:p-3 text-center flex-1">
                      <div className="bg-charcoal-100 h-12 md:h-16 rounded mb-1 md:mb-2 flex items-center justify-center">
                        <span className="text-xs text-charcoal-400">
                          📖 Textbook
                        </span>
                      </div>
                      <p className="text-xs text-charcoal-400">Capture</p>
                    </div>

                    <div className="text-orange flex-shrink-0">
                      <ChevronRight className="h-4 w-4 md:h-6 md:w-6" />
                    </div>

                    <div className="bg-orange/10 rounded-lg p-2 md:p-3 text-center flex-1">
                      <div className="bg-orange/20 h-12 md:h-16 rounded mb-1 md:mb-2 flex items-center justify-center">
                        <span className="text-xs text-orange">
                          📝 Worksheet
                        </span>
                      </div>
                      <p className="text-xs text-orange">Generated</p>
                    </div>
                  </div>

                  <Button
                    className="bg-orange hover:bg-orange/90 text-white w-full md:w-auto"
                    size="sm"
                  >
                    Start capturing
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Demo Modal for Generate with AI */}
        <Dialog open={showAIDemo} onOpenChange={setShowAIDemo}>
          <DialogContent className="max-w-[95vw] md:max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
            <DialogHeader>
              <DialogTitle className="flex items-center text-sage text-lg md:text-xl">
                <Wand2 className="h-5 w-5 mr-2" />
                AI Generated Content Preview
              </DialogTitle>
              <DialogDescription className="text-sm">
                Water cycle explanation with Indian context
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div className="bg-sage/5 rounded-lg p-3 md:p-4 border-l-4 border-sage">
                <div className="prose prose-sm max-w-none">
                  <div className="whitespace-pre-line text-charcoal-500 text-sm">
                    {demoContent}
                  </div>
                </div>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowAIDemo(false)}
                  className="order-2 md:order-1"
                >
                  Close Preview
                </Button>
                <Button
                  onClick={() => {
                    setShowAIDemo(false);
                    setShowTextInput(true);
                  }}
                  className="bg-sage hover:bg-sage/90 text-white order-1 md:order-2"
                >
                  Try your own prompt
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>

        {/* Text Input Modal */}
        <Dialog open={showTextInput} onOpenChange={setShowTextInput}>
          <DialogContent className="max-w-[95vw] md:max-w-lg mx-4">
            <DialogHeader>
              <DialogTitle className="flex items-center text-sage text-lg md:text-xl">
                <Sparkles className="h-5 w-5 mr-2" />
                Create Content with AI
              </DialogTitle>
              <DialogDescription className="text-sm">
                Describe what you want to create and let AI help you
              </DialogDescription>
            </DialogHeader>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                  What would you like to create?
                </label>
                <Textarea
                  placeholder="e.g., Explain photosynthesis for Grade 5 with simple experiments..."
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  className="min-h-[100px] text-sm"
                />
              </div>

              <div className="bg-cream-50 rounded-lg p-3">
                <p className="text-xs text-charcoal-400 mb-1">
                  💡 Tips for better results:
                </p>
                <ul className="text-xs text-charcoal-400 space-y-1">
                  <li>• Mention the grade level</li>
                  <li>• Include local examples if needed</li>
                  <li>• Specify format (worksheet, explanation, quiz)</li>
                </ul>
              </div>

              <div className="flex flex-col md:flex-row md:justify-between gap-3 pt-4 border-t">
                <Button
                  variant="outline"
                  onClick={() => setShowTextInput(false)}
                  className="order-2 md:order-1"
                >
                  Cancel
                </Button>
                <Button
                  disabled={!aiPrompt.trim()}
                  className="bg-sage hover:bg-sage/90 text-white order-1 md:order-2"
                >
                  Generate Content
                  <Sparkles className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
