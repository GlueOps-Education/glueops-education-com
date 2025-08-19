import { Mail, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import glueopsLogo from "@/assets/glueops-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center space-x-3">
            <img 
              src={glueopsLogo} 
              alt="GlueOps Logo" 
              className="h-8 w-8"
            />
            <h1 className="text-2xl font-bold text-foreground">
              GlueOps Education
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Welcome Section */}
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground mb-2">
              Welcome to GlueOps Education!
            </h2>
            <p className="text-xl text-muted-foreground">
              Making it easy to learn coding and essential IT skills
            </p>
          </div>

          {/* Information Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Platform Support */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Mail className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Platform Support
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For technical issues with the platform, please email our support team:
                </p>
                <a 
                  href="mailto:helpdesk@glueops-education.com" 
                  className="inline-flex items-center text-accent hover:text-accent/80 font-medium"
                >
                  helpdesk@glueops-education.com
                </a>
              </CardContent>
            </Card>

            {/* Maintenance Window */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Clock className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Maintenance Schedule
                </h3>
                <div className="text-muted-foreground text-sm leading-relaxed space-y-2">
                  <p><strong>Every Monday</strong></p>
                  <p>9PM - 3AM Pacific Time</p>
                  <p>Expect disruptions up to 60 minutes</p>
                  <p>**We will give a notification via email 15mins before starting the maintenance</p>
                </div>
              </CardContent>
            </Card>

            {/* Assignment Help */}
            <Card className="bg-card border-border">
              <CardContent className="p-6 text-center space-y-4">
                <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-accent-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  Assignment Help
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For help with assignments and coursework, please contact your instructors directly.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Important Notice */}
          <div className="bg-secondary border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold text-secondary-foreground mb-3">
              Important Information
            </h3>
            <div className="space-y-3 text-secondary-foreground">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong>Platform Support:</strong> For technical issues, email{" "}
                  <a href="mailto:helpdesk@glueops-education.com" className="text-accent hover:text-accent/80">
                    helpdesk@glueops-education.com
                  </a>
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong>Maintenance:</strong> Platform maintenance occurs every Monday from 9PM Pacific Time to 3AM Pacific Time. 
                  Expect one or more disruptions during this time for up to 60 minutes.
                </p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p>
                  <strong>Assignment Help:</strong> For help on assignments, please contact your instructors.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border mt-16">
        <div className="container mx-auto px-6 py-8 text-center">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <img 
              src={glueopsLogo} 
              alt="GlueOps Logo" 
              className="h-6 w-6"
            />
            <span className="text-foreground font-medium">GlueOps Education Team</span>
          </div>
          <p className="text-muted-foreground text-sm">
            Supporting students in computer science, cybersecurity, and IT certification programs<br />
            Interested in learning more?  Contact us: <a href="mailto:hello@glueops-education.com" className="inline-flex items-center text-accent hover:text-accent/80 font-medium">helpdesk@glueops-education.com</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;