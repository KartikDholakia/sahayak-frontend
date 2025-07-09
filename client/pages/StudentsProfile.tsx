import { useState } from "react";
import {
  ArrowLeft,
  Search,
  Filter,
  User,
  Phone,
  TrendingUp,
  TrendingDown,
  CheckCircle,
  AlertCircle,
  BarChart3,
  FileText,
  Star,
  Target,
  Calendar,
} from "lucide-react";
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
import { useNavigate } from "react-router-dom";

interface Student {
  id: string;
  name: string;
  grade: string;
  section: string;
  rollNumber: string;
  photo?: string;
  averageScore: number;
  performance: "excellent" | "good" | "needs-attention";
  recentAssignments: number;
  strongConcepts: string[];
  weakConcepts: string[];
  overallProgress: number;
  subjectProgress: { subject: string; progress: number }[];
  assignments: {
    id: string;
    title: string;
    subject: string;
    score: number;
    totalMarks: number;
    date: string;
    feedback: string;
  }[];
}

const mockStudents: Student[] = [
  {
    id: "1",
    name: "Kartik Dholakia",
    grade: "IX",
    section: "D",
    rollNumber: "13",
    averageScore: 85,
    performance: "excellent",
    recentAssignments: 8,
    strongConcepts: ["Algebra", "Geometry", "Number Systems"],
    weakConcepts: ["Statistics", "Probability"],
    overallProgress: 78,
    subjectProgress: [
      { subject: "Mathematics", progress: 85 },
      { subject: "Science", progress: 78 },
      { subject: "English", progress: 82 },
    ],
    assignments: [
      {
        id: "a1",
        title: "Algebra Test",
        subject: "Mathematics",
        score: 45,
        totalMarks: 50,
        date: "2024-01-15",
        feedback: "Excellent understanding of algebraic expressions",
      },
      {
        id: "a2",
        title: "Cell Structure Quiz",
        subject: "Science",
        score: 18,
        totalMarks: 20,
        date: "2024-01-12",
        feedback: "Good grasp of cellular components",
      },
    ],
  },
  {
    id: "2",
    name: "Priya Sharma",
    grade: "IX",
    section: "D",
    rollNumber: "07",
    averageScore: 92,
    performance: "excellent",
    recentAssignments: 9,
    strongConcepts: ["Grammar", "Literature", "Comprehension"],
    weakConcepts: ["Creative Writing"],
    overallProgress: 88,
    subjectProgress: [
      { subject: "English", progress: 95 },
      { subject: "Hindi", progress: 88 },
      { subject: "Social Studies", progress: 85 },
    ],
    assignments: [
      {
        id: "a3",
        title: "Essay Writing",
        subject: "English",
        score: 28,
        totalMarks: 30,
        date: "2024-01-14",
        feedback: "Excellent vocabulary and structure",
      },
    ],
  },
  {
    id: "3",
    name: "Rahul Kumar",
    grade: "IX",
    section: "D",
    rollNumber: "21",
    averageScore: 68,
    performance: "needs-attention",
    recentAssignments: 5,
    strongConcepts: ["Physical Geography", "History"],
    weakConcepts: ["Mathematics", "Physics", "Chemistry"],
    overallProgress: 55,
    subjectProgress: [
      { subject: "Mathematics", progress: 45 },
      { subject: "Science", progress: 52 },
      { subject: "Social Studies", progress: 78 },
    ],
    assignments: [
      {
        id: "a4",
        title: "Basic Arithmetic",
        subject: "Mathematics",
        score: 12,
        totalMarks: 25,
        date: "2024-01-13",
        feedback: "Needs more practice with calculations",
      },
    ],
  },
];

type ProfileView = "dashboard" | "individual";

export default function StudentsProfile() {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<ProfileView>("dashboard");
  const [selectedStudent, setSelectedStudent] = useState<Student | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [gradeFilter, setGradeFilter] = useState<string>("");
  const [performanceFilter, setPerformanceFilter] = useState<string>("");

  const filteredStudents = mockStudents.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      student.rollNumber.includes(searchQuery);
    const matchesGrade =
      !gradeFilter ||
      gradeFilter === "all-grades" ||
      student.grade === gradeFilter;
    const matchesPerformance =
      !performanceFilter ||
      performanceFilter === "all-performance" ||
      student.performance === performanceFilter;

    return matchesSearch && matchesGrade && matchesPerformance;
  });

  const handleStudentClick = (student: Student) => {
    setSelectedStudent(student);
    setCurrentView("individual");
  };

  const getPerformanceBadge = (performance: string) => {
    switch (performance) {
      case "excellent":
        return <Badge className="bg-sage text-white">Excellent</Badge>;
      case "good":
        return <Badge className="bg-primary text-white">Good</Badge>;
      case "needs-attention":
        return <Badge className="bg-orange text-white">Needs Attention</Badge>;
      default:
        return <Badge variant="secondary">Unknown</Badge>;
    }
  };

  // Students Profile Dashboard
  if (currentView === "dashboard") {
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
              Students Profile
            </h1>
          </div>

          {/* Search and Filters */}
          <div className="space-y-4 mb-6">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-charcoal-400" />
              <Input
                placeholder="Search by name or roll number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 border-primary/20 focus:border-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-col md:flex-row gap-3">
              <Select value={gradeFilter} onValueChange={setGradeFilter}>
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Filter by grade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-grades">All Grades</SelectItem>
                  <SelectItem value="IX">Grade IX</SelectItem>
                  <SelectItem value="X">Grade X</SelectItem>
                  <SelectItem value="XI">Grade XI</SelectItem>
                  <SelectItem value="XII">Grade XII</SelectItem>
                </SelectContent>
              </Select>

              <Select
                value={performanceFilter}
                onValueChange={setPerformanceFilter}
              >
                <SelectTrigger className="border-primary/20 focus:border-primary">
                  <SelectValue placeholder="Filter by performance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-performance">
                    All Performance
                  </SelectItem>
                  <SelectItem value="excellent">Top Performers</SelectItem>
                  <SelectItem value="good">Good Performance</SelectItem>
                  <SelectItem value="needs-attention">
                    Needs Attention
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Students List */}
          <div className="space-y-4">
            {filteredStudents.map((student) => (
              <Card
                key={student.id}
                className="border-0 shadow-lg bg-white/90 backdrop-blur hover:shadow-xl transition-all cursor-pointer"
                onClick={() => handleStudentClick(student)}
              >
                <CardContent className="p-4">
                  <div className="flex items-center space-x-4">
                    <div className="bg-primary/10 rounded-full w-14 h-14 flex items-center justify-center flex-shrink-0">
                      <User className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div className="mb-2 md:mb-0">
                          <h3 className="font-semibold text-charcoal-500 truncate">
                            {student.name}
                          </h3>
                          <p className="text-sm text-charcoal-400">
                            {student.grade} - {student.section} | Roll{" "}
                            {student.rollNumber}
                          </p>
                        </div>
                        <div className="flex items-center space-x-3">
                          {getPerformanceBadge(student.performance)}
                          <div className="text-right">
                            <p className="text-lg font-bold text-charcoal-500">
                              {student.averageScore}%
                            </p>
                            <p className="text-xs text-charcoal-400">
                              Avg Score
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {filteredStudents.length === 0 && (
              <div className="text-center py-12">
                <User className="h-16 w-16 text-charcoal-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-charcoal-400 mb-2">
                  No students found
                </h3>
                <p className="text-charcoal-300">
                  Try adjusting your search or filters
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Individual Student Profile
  if (!selectedStudent) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-skyblue-50 to-cream-100">
      <div className="p-4 md:p-6">
        <div className="flex items-center justify-between mb-6">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentView("dashboard")}
          >
            <ArrowLeft className="h-5 w-5" />
          </Button>
          <h1 className="text-lg md:text-xl font-semibold text-primary">
            Student Profile
          </h1>
          <Button variant="outline" size="sm">
            <Phone className="h-4 w-4 mr-1" />
            Contact Parent
          </Button>
        </div>

        {/* Student Header */}
        <Card className="border-0 shadow-xl bg-white/90 backdrop-blur mb-6">
          <CardContent className="p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto md:mx-0">
                <User className="h-10 w-10 text-primary" />
              </div>
              <div className="text-center md:text-left flex-1">
                <h2 className="text-2xl font-bold text-charcoal-500 mb-1">
                  {selectedStudent.name}
                </h2>
                <p className="text-charcoal-400 mb-2">
                  {selectedStudent.grade} - {selectedStudent.section} | Roll{" "}
                  {selectedStudent.rollNumber}
                </p>
                {getPerformanceBadge(selectedStudent.performance)}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Recent Performance */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur mb-6">
          <CardHeader>
            <CardTitle className="text-charcoal-500 flex items-center">
              <TrendingUp className="h-5 w-5 mr-2 text-sage" />
              Recent Performance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-sage mb-1">
                  {selectedStudent.averageScore}%
                </div>
                <p className="text-sm text-charcoal-400">Average Score</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {selectedStudent.recentAssignments}
                </div>
                <p className="text-sm text-charcoal-400">Recent Assignments</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-orange mb-1">78%</div>
                <p className="text-sm text-charcoal-400">Class Average</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Section */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur mb-6">
          <CardHeader>
            <CardTitle className="text-charcoal-500 flex items-center">
              <BarChart3 className="h-5 w-5 mr-2 text-primary" />
              Learning Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-charcoal-500">
                  Overall Progress
                </span>
                <span className="text-sm text-charcoal-400">
                  {selectedStudent.overallProgress}%
                </span>
              </div>
              <Progress
                value={selectedStudent.overallProgress}
                className="h-3"
              />

              <div className="space-y-3 mt-6">
                {selectedStudent.subjectProgress.map((subject) => (
                  <div key={subject.subject}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-charcoal-500">
                        {subject.subject}
                      </span>
                      <span className="text-sm text-charcoal-400">
                        {subject.progress}%
                      </span>
                    </div>
                    <Progress value={subject.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Strong & Weak Concepts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Strong Concepts */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-sage flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Strong Concepts
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedStudent.strongConcepts.map((concept, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-sage/5 rounded-lg"
                  >
                    <span className="text-sm text-charcoal-500">{concept}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-sage" />
                      <span className="text-sm text-sage font-semibold">
                        {85 + index * 3}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Weak Concepts */}
          <Card className="border-0 shadow-lg bg-white/90 backdrop-blur">
            <CardHeader>
              <CardTitle className="text-orange flex items-center">
                <AlertCircle className="h-5 w-5 mr-2" />
                Areas for Improvement
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {selectedStudent.weakConcepts.map((concept, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between p-3 bg-orange/5 rounded-lg">
                      <span className="text-sm text-charcoal-500">
                        {concept}
                      </span>
                      <span className="text-sm text-orange font-semibold">
                        {45 + index * 5}%
                      </span>
                    </div>
                    <div className="pl-3">
                      <Button
                        variant="link"
                        size="sm"
                        className="p-0 h-auto text-orange text-xs"
                      >
                        <Target className="h-3 w-3 mr-1" />
                        Generate practice materials
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Assignments */}
        <Card className="border-0 shadow-lg bg-white/90 backdrop-blur mb-6">
          <CardHeader>
            <CardTitle className="text-charcoal-500 flex items-center">
              <FileText className="h-5 w-5 mr-2 text-primary" />
              Recent Assignments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {selectedStudent.assignments.map((assignment) => (
                <div
                  key={assignment.id}
                  className="flex flex-col md:flex-row md:items-center md:justify-between p-4 bg-cream-50 rounded-lg space-y-2 md:space-y-0"
                >
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal-500">
                      {assignment.title}
                    </h4>
                    <div className="flex items-center space-x-4 text-sm text-charcoal-400">
                      <span>{assignment.subject}</span>
                      <span className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1" />
                        {new Date(assignment.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-sm text-charcoal-400 mt-1">
                      {assignment.feedback}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-charcoal-500">
                      {assignment.score}/{assignment.totalMarks}
                    </div>
                    <Badge
                      variant={
                        (assignment.score / assignment.totalMarks) * 100 >= 80
                          ? "default"
                          : "secondary"
                      }
                      className={
                        (assignment.score / assignment.totalMarks) * 100 >= 80
                          ? "bg-sage text-white"
                          : "bg-orange text-white"
                      }
                    >
                      {Math.round(
                        (assignment.score / assignment.totalMarks) * 100,
                      )}
                      %
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <FileText className="mr-2 h-4 w-4" />
            Export Progress Report
          </Button>
          <Button
            variant="outline"
            className="border-sage text-sage hover:bg-sage/10"
          >
            <Target className="mr-2 h-4 w-4" />
            Create Targeted Assignment
          </Button>
        </div>
      </div>
    </div>
  );
}
