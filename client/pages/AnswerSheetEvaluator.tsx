import { useState } from "react";
import {
  ArrowLeft,
  Camera,
  Upload,
  Info,
  Plus,
  CheckCircle,
  TrendingUp,
  Users,
  Share2,
  User,
  FileText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

type EvaluationStep = "setup" | "camera" | "results";

interface StudentData {
  name: string;
  grade: string;
  subject: string;
  hasAnswerKey: boolean;
}

export default function AnswerSheetEvaluator() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState<EvaluationStep>("setup");
  const [showHowItWorks, setShowHowItWorks] = useState(false);
  const [capturedPages, setCapturedPages] = useState(0);

  const [studentData, setStudentData] = useState<StudentData>({
    name: "",
    grade: "",
    subject: "",
    hasAnswerKey: false,
  });

  const handleStartEvaluation = () => {
    if (studentData.name && studentData.grade && studentData.subject) {
      setCurrentStep("camera");
    }
  };

  const handleCapturePage = () => {
    setCapturedPages((prev) => prev + 1);
  };

  const handleFinishCapture = () => {
    setCurrentStep("results");
  };

  // Setup Screen
  if (currentStep === "setup") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
        <div className="p-4 md:p-6">
          <div className="flex items-center mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => navigate("/dashboard")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg md:text-xl font-semibold text-primary ml-2">
              Answer Sheet Evaluator
            </h1>
          </div>

          {/* How it Works Dialog */}
          <Dialog open={showHowItWorks} onOpenChange={setShowHowItWorks}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                className="mb-6 w-full md:w-auto"
                onClick={() => setShowHowItWorks(true)}
              >
                <Info className="h-4 w-4 mr-2" />
                How it works
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-[95vw] md:max-w-lg mx-4">
              <DialogHeader>
                <DialogTitle className="text-primary">
                  How Answer Sheet Evaluation Works
                </DialogTitle>
                <DialogDescription>
                  AI-powered assessment in 3 simple steps
                </DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-500">
                      Setup Details
                    </h4>
                    <p className="text-sm text-charcoal-400">
                      Enter student info and upload question paper
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-orange font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-500">
                      Capture Answers
                    </h4>
                    <p className="text-sm text-charcoal-400">
                      Scan answer sheets with your camera
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-sage/10 rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0">
                    <span className="text-sage font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-charcoal-500">
                      Get Results
                    </h4>
                    <p className="text-sm text-charcoal-400">
                      Receive detailed analysis and suggestions
                    </p>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>

          {/* Setup Form */}
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-charcoal-500 flex items-center">
                <FileText className="h-5 w-5 mr-2 text-primary" />
                Setup Evaluation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Student Name */}
              <div>
                <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                  Student Name
                </label>
                <Input
                  placeholder="Enter student's full name"
                  value={studentData.name}
                  onChange={(e) =>
                    setStudentData({ ...studentData, name: e.target.value })
                  }
                  className="border-primary/20 focus:border-primary"
                />
              </div>

              {/* Grade Level */}
              <div>
                <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                  Grade Level
                </label>
                <Select
                  value={studentData.grade}
                  onValueChange={(value) =>
                    setStudentData({ ...studentData, grade: value })
                  }
                >
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 12 }, (_, i) => (
                      <SelectItem key={i + 1} value={`${i + 1}`}>
                        Grade {i + 1}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Subject */}
              <div>
                <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                  Subject
                </label>
                <Select
                  value={studentData.subject}
                  onValueChange={(value) =>
                    setStudentData({ ...studentData, subject: value })
                  }
                >
                  <SelectTrigger className="border-primary/20 focus:border-primary">
                    <SelectValue placeholder="Select subject" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="mathematics">Mathematics</SelectItem>
                    <SelectItem value="science">Science</SelectItem>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="hindi">Hindi</SelectItem>
                    <SelectItem value="social-studies">
                      Social Studies
                    </SelectItem>
                    <SelectItem value="physics">Physics</SelectItem>
                    <SelectItem value="chemistry">Chemistry</SelectItem>
                    <SelectItem value="biology">Biology</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Question Paper Upload */}
              <div>
                <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                  Question Paper
                </label>
                <Button
                  variant="outline"
                  className="w-full border-primary/20 hover:border-primary border-dashed h-20"
                >
                  <div className="text-center">
                    <Upload className="h-6 w-6 mx-auto mb-1 text-primary" />
                    <p className="text-sm text-charcoal-400">
                      Upload or capture question paper
                    </p>
                  </div>
                </Button>
              </div>

              {/* Answer Key Toggle */}
              <div className="flex items-center justify-between p-4 bg-cream-50 rounded-lg">
                <div>
                  <h4 className="font-semibold text-charcoal-500">
                    Answer Key
                  </h4>
                  <p className="text-sm text-charcoal-400">
                    Upload answer key for better accuracy
                  </p>
                </div>
                <Switch
                  checked={studentData.hasAnswerKey}
                  onCheckedChange={(checked) =>
                    setStudentData({ ...studentData, hasAnswerKey: checked })
                  }
                />
              </div>

              {/* Answer Key Upload (conditional) */}
              {studentData.hasAnswerKey && (
                <div>
                  <label className="text-sm font-medium text-charcoal-500 mb-2 block">
                    Answer Key
                  </label>
                  <Button
                    variant="outline"
                    className="w-full border-sage/20 hover:border-sage border-dashed h-16"
                  >
                    <div className="text-center">
                      <Upload className="h-5 w-5 mx-auto mb-1 text-sage" />
                      <p className="text-sm text-charcoal-400">
                        Upload answer key
                      </p>
                    </div>
                  </Button>
                </div>
              )}

              <Button
                onClick={handleStartEvaluation}
                disabled={
                  !studentData.name ||
                  !studentData.grade ||
                  !studentData.subject
                }
                className="w-full bg-primary hover:bg-primary/90 text-white"
                size="lg"
              >
                Start Evaluation
                <Camera className="ml-2 h-4 w-4" />
              </Button>
            </CardContent>
          </Card>

          {/* Demo Report Link */}
          <div className="text-center mt-6">
            <Button
              variant="link"
              onClick={() => {
                setStudentData({
                  name: "Rahul Sharma",
                  grade: "8",
                  subject: "Mathematics",
                  hasAnswerKey: true,
                });
                setCurrentStep("results");
              }}
              className="text-primary underline"
            >
              Show Demo Report
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Camera Screen
  if (currentStep === "camera") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
        <div className="p-4 md:p-6">
          <div className="flex items-center justify-between mb-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCurrentStep("setup")}
            >
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <h1 className="text-lg md:text-xl font-semibold text-primary">
              Capture Answer Sheets
            </h1>
            <Badge variant="secondary">{capturedPages} pages</Badge>
          </div>

          {/* Camera Interface */}
          <div className="mb-6">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
              <CardContent className="p-0">
                <div className="bg-charcoal-100 aspect-[3/4] rounded-t-lg flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-charcoal-400 mx-auto mb-4" />
                    <p className="text-charcoal-400">Camera viewfinder</p>
                    <p className="text-sm text-charcoal-300">
                      Position answer sheet here
                    </p>
                  </div>
                </div>

                <div className="p-4">
                  <Button
                    onClick={handleCapturePage}
                    className="w-full bg-orange hover:bg-orange/90 text-white mb-4"
                    size="lg"
                  >
                    <Camera className="mr-2 h-5 w-5" />
                    Capture Page {capturedPages + 1}
                  </Button>

                  {capturedPages > 0 && (
                    <Button
                      onClick={handleFinishCapture}
                      variant="outline"
                      className="w-full border-sage text-sage hover:bg-sage/10"
                    >
                      Finish & Evaluate ({capturedPages} pages)
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tips Section */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-charcoal-500 text-lg">
                📸 Capture Tips
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Capture each page clearly
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Include student name
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Good lighting helps
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Keep pages flat and straight
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Results Screen
  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
      <div className="p-4 md:p-6">
        <div className="flex items-center mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg md:text-xl font-semibold text-primary ml-2">
            Evaluation Results
          </h1>
        </div>

        {/* Student Header */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur mb-6">
          <CardContent className="p-4 md:p-6">
            <div className="flex items-center space-x-4">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
                <User className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h2 className="text-xl font-bold text-charcoal-500">
                  {studentData.name}
                </h2>
                <p className="text-charcoal-400">
                  Grade {studentData.grade} • {studentData.subject}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Score Display */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-sage/10 to-primary/10 mb-6">
          <CardContent className="p-6 text-center">
            <div className="mb-4">
              <div className="text-6xl font-bold text-sage mb-2">85</div>
              <div className="text-xl text-charcoal-400">out of 100</div>
            </div>
            <Badge className="bg-sage text-white">Excellent Performance</Badge>
          </CardContent>
        </Card>

        {/* Performance Cards */}
        <div className="space-y-4">
          {/* Strengths */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-sage flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Strengths
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Excellent understanding of basic concepts
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Clear and neat handwriting
                  </p>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-sage" />
                  <p className="text-sm text-charcoal-500">
                    Good problem-solving approach
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Areas for Improvement */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-orange flex items-center">
                <TrendingUp className="h-5 w-5 mr-2" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-orange/10 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-charcoal-500">
                    More practice needed with word problems
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-orange/10 rounded-full w-2 h-2 mt-2 flex-shrink-0"></div>
                  <p className="text-sm text-charcoal-500">
                    Show detailed steps in calculations
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Suggestions */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-primary flex items-center">
                <Info className="h-5 w-5 mr-2" />
                Actionable Suggestions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="bg-primary/5 rounded-lg p-3">
                  <p className="text-sm font-medium text-charcoal-500 mb-1">
                    For Student:
                  </p>
                  <p className="text-sm text-charcoal-400">
                    Practice 5 word problems daily from textbook
                  </p>
                </div>
                <div className="bg-sage/5 rounded-lg p-3">
                  <p className="text-sm font-medium text-charcoal-500 mb-1">
                    For Teacher:
                  </p>
                  <p className="text-sm text-charcoal-400">
                    Focus on step-by-step problem solving methods
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Share Report Button */}
        <div className="mt-6">
          <Button
            className="w-full bg-primary hover:bg-primary/90 text-white"
            size="lg"
          >
            <Share2 className="mr-2 h-5 w-5" />
            Share Report
            <Users className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
