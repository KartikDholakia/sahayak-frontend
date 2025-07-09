import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Bell,
  Search,
  Mic,
  Camera,
  FileText,
  Users,
  Lightbulb,
  Plus,
  TrendingUp,
  Calendar,
  CheckCircle,
  Sparkles,
  BookOpen,
} from "lucide-react";

export default function Dashboard() {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const currentTime = new Date().getHours();
  const greeting =
    currentTime < 12
      ? "Good morning"
      : currentTime < 17
        ? "Good afternoon"
        : "Good evening";

  const todayTasks = [
    { id: 1, task: "Review Science Grade 6 worksheets", completed: true },
    { id: 2, task: "Prepare Math test for Grade 8", completed: false },
    { id: 3, task: "Parent-teacher meeting at 3 PM", completed: false },
  ];

  const knowledgeCornerFacts = [
    "Water molecules dance faster when heated - a fun way to explain states of matter!",
    "The human brain has the same texture as tofu - great for anatomy lessons!",
    "A group of flamingos is called a 'flamboyance' - perfect for vocabulary building!",
  ];

  const [currentFact, setCurrentFact] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur border-b border-primary/10 p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-xl font-semibold text-primary">
              {greeting}, Priya! 👋
            </h1>
            <p className="text-charcoal-400 text-sm">
              Ready to inspire young minds today?
            </p>
          </div>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-5 w-5 text-charcoal-400" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange rounded-full"></div>
          </Button>
        </div>

        {/* Ask AI Text Box */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-charcoal-400" />
          <Input
            placeholder="Ask me anything about teaching..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-12 bg-white border-primary/20 focus:border-primary h-12 text-base"
          />
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
          >
            <Mic className="h-5 w-5 text-primary" />
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="p-6 space-y-6">
        {/* Quick Stats Card */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
          <CardHeader>
            <CardTitle className="text-charcoal-500 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-sage" />
              Today's Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-sage/20"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${75 * 1.75} ${175 * 1.75}`}
                      className="text-sage"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-sage">156</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-charcoal-500">
                  Students
                </p>
                <p className="text-xs text-sage">+8 this week</p>
              </div>

              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-orange/20"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${50 * 1.75} ${175 * 1.75}`}
                      className="text-orange"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-orange">4</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-charcoal-500">
                  Classes Today
                </p>
                <p className="text-xs text-orange">2 completed</p>
              </div>

              <div className="text-center">
                <div className="relative w-16 h-16 mx-auto mb-2">
                  <svg className="w-16 h-16 transform -rotate-90">
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      className="text-primary/20"
                    />
                    <circle
                      cx="32"
                      cy="32"
                      r="28"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray={`${25 * 1.75} ${175 * 1.75}`}
                      className="text-primary"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">12</span>
                  </div>
                </div>
                <p className="text-sm font-semibold text-charcoal-500">
                  Assignments
                </p>
                <p className="text-xs text-primary">3 pending review</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Card
            className="border-0 shadow-lg bg-gradient-to-br from-sage/10 to-sage/5 hover:from-sage/20 hover:to-sage/10 transition-all cursor-pointer"
            onClick={() => navigate("/content-generator")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-sage/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Sparkles className="h-8 w-8 text-sage" />
              </div>
              <h3 className="font-semibold text-charcoal-500 mb-2">
                Smart Content Generator
              </h3>
              <p className="text-sm text-charcoal-400">
                Create worksheets instantly
              </p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg bg-gradient-to-br from-orange/10 to-orange/5 hover:from-orange/20 hover:to-orange/10 transition-all cursor-pointer"
            onClick={() => navigate("/camera-capture")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-orange/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Camera className="h-8 w-8 text-orange" />
              </div>
              <h3 className="font-semibold text-charcoal-500 mb-2">
                Snap & Create
              </h3>
              <p className="text-sm text-charcoal-400">
                Photo to worksheets in seconds
              </p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg bg-gradient-to-br from-primary/10 to-primary/5 hover:from-primary/20 hover:to-primary/10 transition-all cursor-pointer"
            onClick={() => navigate("/answer-sheet-evaluator")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-primary/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <FileText className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-charcoal-500 mb-2">
                Answer Sheet Evaluator
              </h3>
              <p className="text-sm text-charcoal-400">AI-powered assessment</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 shadow-lg bg-gradient-to-br from-teal/10 to-teal/5 hover:from-teal/20 hover:to-teal/10 transition-all cursor-pointer"
            onClick={() => navigate("/students-profile")}
          >
            <CardContent className="p-6 text-center">
              <div className="bg-teal/20 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Users className="h-8 w-8 text-teal" />
              </div>
              <h3 className="font-semibold text-charcoal-500 mb-2">
                Students Profile
              </h3>
              <p className="text-sm text-charcoal-400">
                Track student progress
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Daily Planner Card */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
          <CardHeader className="flex-row items-center justify-between">
            <CardTitle className="text-charcoal-500 flex items-center">
              <Calendar className="h-5 w-5 mr-2 text-primary" />
              Today's Schedule
            </CardTitle>
            <Button variant="ghost" size="sm">
              <Plus className="h-4 w-4 mr-1" />
              Add Task
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {todayTasks.map((task) => (
                <div
                  key={task.id}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-cream-50"
                >
                  <CheckCircle
                    className={`h-5 w-5 ${
                      task.completed ? "text-sage" : "text-charcoal-300"
                    }`}
                  />
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? "text-charcoal-400 line-through"
                        : "text-charcoal-500"
                    }`}
                  >
                    {task.task}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Knowledge Corner Card */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-sage/10 to-primary/10">
          <CardHeader>
            <CardTitle className="text-charcoal-500 flex items-center">
              <Lightbulb className="h-5 w-5 mr-2 text-orange" />
              Knowledge Corner
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-start space-x-3">
              <div className="bg-orange/10 p-2 rounded-full">
                <BookOpen className="h-5 w-5 text-orange" />
              </div>
              <div className="flex-1">
                <Badge variant="secondary" className="mb-2">
                  Science Grade 6
                </Badge>
                <p className="text-charcoal-500 text-sm leading-relaxed">
                  {knowledgeCornerFacts[currentFact]}
                </p>
                <Button
                  variant="link"
                  size="sm"
                  className="p-0 h-auto text-primary"
                  onClick={() =>
                    setCurrentFact(
                      (currentFact + 1) % knowledgeCornerFacts.length,
                    )
                  }
                >
                  Next fact →
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
