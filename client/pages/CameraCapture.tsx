import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function CameraCapture() {
  const navigate = useNavigate();

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
            Snap & Create
          </h1>
        </div>

        <div className="text-center py-20">
          <div className="bg-orange/10 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
            <span className="text-4xl">📸</span>
          </div>
          <h2 className="text-2xl font-bold text-charcoal-500 mb-4">
            Coming Soon!
          </h2>
          <p className="text-charcoal-400 max-w-md mx-auto">
            The camera capture feature is under development. Soon you'll be able
            to snap photos of textbook pages and convert them to worksheets
            instantly.
          </p>
        </div>
      </div>
    </div>
  );
}
