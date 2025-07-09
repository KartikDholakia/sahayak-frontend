import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import {
  MapPin,
  BookOpen,
  Users,
  School,
  Calendar,
  Volume2,
  Heart,
  ChevronRight,
  ChevronLeft,
  SkipForward,
} from "lucide-react";

const subjects = [
  "Mathematics",
  "Science",
  "Hindi",
  "English",
  "Social Studies",
  "Physics",
  "Chemistry",
  "Biology",
  "Geography",
  "History",
  "Computer Science",
  "Sanskrit",
];

const grades = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];

const schoolTypes = [
  { name: "Government School", icon: School },
  { name: "Private School", icon: School },
  { name: "Kendriya Vidyalaya", icon: School },
  { name: "Tuition Center", icon: Users },
];

const languages = ["Hindi", "English", "Bengali", "Tamil", "Telugu", "Marathi"];

export default function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 7;

  const [formData, setFormData] = useState({
    location: "",
    subjects: [] as string[],
    grades: [] as string[],
    schoolType: "",
    experience: 5,
    studentCount: "",
    languages: [] as string[],
    specialNeeds: false,
  });

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSkip = () => {
    navigate("/dashboard");
  };

  const toggleSubject = (subject: string) => {
    setFormData({
      ...formData,
      subjects: formData.subjects.includes(subject)
        ? formData.subjects.filter((s) => s !== subject)
        : [...formData.subjects, subject],
    });
  };

  const toggleGrade = (grade: string) => {
    setFormData({
      ...formData,
      grades: formData.grades.includes(grade)
        ? formData.grades.filter((g) => g !== grade)
        : [...formData.grades, grade],
    });
  };

  const toggleLanguage = (language: string) => {
    setFormData({
      ...formData,
      languages: formData.languages.includes(language)
        ? formData.languages.filter((l) => l !== language)
        : [...formData.languages, language],
    });
  };

  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
      {/* Header */}
      <div className="p-6 bg-white/90 backdrop-blur border-b border-primary/10">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-semibold text-primary">
            Let's understand your teaching world
          </h1>
          <Button
            variant="ghost"
            onClick={handleSkip}
            className="text-charcoal-400"
          >
            <SkipForward className="h-4 w-4 mr-1" />
            Skip
          </Button>
        </div>
        <Progress value={progressPercentage} className="h-2" />
        <p className="text-sm text-charcoal-400 mt-2">
          Step {currentStep} of {totalSteps}
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 p-6">
        {/* Step 1: Location */}
        {currentStep === 1 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-charcoal-500">
                Where do you teach?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Select
                  value={formData.location}
                  onValueChange={(value) =>
                    setFormData({ ...formData, location: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select your state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="maharashtra">Maharashtra</SelectItem>
                    <SelectItem value="delhi">Delhi</SelectItem>
                    <SelectItem value="karnataka">Karnataka</SelectItem>
                    <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                    <SelectItem value="uttar-pradesh">Uttar Pradesh</SelectItem>
                    <SelectItem value="west-bengal">West Bengal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Subjects */}
        {currentStep === 2 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-sage/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <BookOpen className="h-8 w-8 text-sage" />
              </div>
              <CardTitle className="text-charcoal-500">
                What subjects do you teach?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {subjects.map((subject) => (
                  <button
                    key={subject}
                    onClick={() => toggleSubject(subject)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.subjects.includes(subject)
                        ? "border-sage bg-sage/10 text-sage font-semibold"
                        : "border-charcoal-200 bg-white text-charcoal-400 hover:border-sage/50"
                    }`}
                  >
                    {subject}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Grades */}
        {currentStep === 3 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-orange/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-orange" />
              </div>
              <CardTitle className="text-charcoal-500">
                Which grades do you teach?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-3">
                {grades.map((grade) => (
                  <button
                    key={grade}
                    onClick={() => toggleGrade(grade)}
                    className={`p-4 rounded-xl border-2 transition-all text-lg font-semibold ${
                      formData.grades.includes(grade)
                        ? "border-orange bg-orange/10 text-orange"
                        : "border-charcoal-200 bg-white text-charcoal-400 hover:border-orange/50"
                    }`}
                  >
                    {grade}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 4: School Type */}
        {currentStep === 4 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <School className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-charcoal-500">
                What type of school do you work at?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {schoolTypes.map((type) => (
                  <button
                    key={type.name}
                    onClick={() =>
                      setFormData({ ...formData, schoolType: type.name })
                    }
                    className={`w-full p-4 rounded-xl border-2 transition-all flex items-center space-x-3 ${
                      formData.schoolType === type.name
                        ? "border-primary bg-primary/10 text-primary"
                        : "border-charcoal-200 bg-white text-charcoal-400 hover:border-primary/50"
                    }`}
                  >
                    <type.icon className="h-6 w-6" />
                    <span className="font-semibold">{type.name}</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 5: Experience & Student Count */}
        {currentStep === 5 && (
          <div className="space-y-6">
            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
              <CardHeader className="text-center">
                <div className="bg-sage/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-8 w-8 text-sage" />
                </div>
                <CardTitle className="text-charcoal-500">
                  Teaching Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <p className="text-3xl font-bold text-sage mb-2">
                    {formData.experience} years
                  </p>
                  <input
                    type="range"
                    min="0"
                    max="30"
                    value={formData.experience}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        experience: parseInt(e.target.value),
                      })
                    }
                    className="w-full accent-sage"
                  />
                  <div className="flex justify-between text-sm text-charcoal-400 mt-2">
                    <span>0 years</span>
                    <span>30+ years</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="text-charcoal-500">
                  How many students do you teach?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-orange" />
                  <Input
                    type="number"
                    placeholder="e.g., 150"
                    value={formData.studentCount}
                    onChange={(e) =>
                      setFormData({ ...formData, studentCount: e.target.value })
                    }
                    className="border-orange/20 focus:border-orange"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Step 6: Languages */}
        {currentStep === 6 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-orange/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Volume2 className="h-8 w-8 text-orange" />
              </div>
              <CardTitle className="text-charcoal-500">
                Which languages do you prefer?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((language) => (
                  <button
                    key={language}
                    onClick={() => toggleLanguage(language)}
                    className={`p-3 rounded-xl border-2 transition-all ${
                      formData.languages.includes(language)
                        ? "border-orange bg-orange/10 text-orange font-semibold"
                        : "border-charcoal-200 bg-white text-charcoal-400 hover:border-orange/50"
                    }`}
                  >
                    {language}
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 7: Special Needs */}
        {currentStep === 7 && (
          <Card className="border-0 shadow-xl bg-white/90 backdrop-blur">
            <CardHeader className="text-center">
              <div className="bg-sage/10 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Heart className="h-8 w-8 text-sage" />
              </div>
              <CardTitle className="text-charcoal-500">
                Do you teach students with special needs?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between p-4 bg-cream-100 rounded-xl">
                <div>
                  <p className="font-semibold text-charcoal-500">
                    Special needs students
                  </p>
                  <p className="text-sm text-charcoal-400">
                    This helps us customize content for accessibility
                  </p>
                </div>
                <Switch
                  checked={formData.specialNeeds}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, specialNeeds: checked })
                  }
                />
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      {/* Navigation */}
      <div className="p-6 bg-white/90 backdrop-blur border-t border-primary/10">
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentStep === 1}
            className="border-charcoal-200"
          >
            <ChevronLeft className="h-4 w-4 mr-1" />
            Previous
          </Button>

          <div className="flex space-x-2">
            {Array.from({ length: totalSteps }, (_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full ${
                  i + 1 <= currentStep ? "bg-primary" : "bg-charcoal-200"
                }`}
              />
            ))}
          </div>

          <Button
            onClick={handleNext}
            className="bg-primary hover:bg-primary/90 text-white"
          >
            {currentStep === totalSteps ? "Complete" : "Next"}
            <ChevronRight className="h-4 w-4 ml-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
