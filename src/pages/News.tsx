import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, Newspaper } from "lucide-react";

export default function News() {
  const articles = [
    {
      title: "GSV Drones Announces Revolutionary AI Navigation System",
      category: "Product News",
      date: "March 15, 2024",
      readTime: "3 min read",
      excerpt: "Our latest breakthrough in autonomous navigation technology promises to revolutionize how drones operate in complex environments.",
      image: "/api/placeholder/600/300",
      featured: true
    },
    {
      title: "Partnership with Global Mining Corporation Expands Operations",
      category: "Business",
      date: "March 10, 2024",
      readTime: "2 min read",
      excerpt: "Strategic partnership brings advanced surveying capabilities to mining operations across three continents.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "New Manufacturing Facility Opens in Texas",
      category: "Company News",
      date: "March 5, 2024",
      readTime: "4 min read",
      excerpt: "State-of-the-art facility will double our production capacity and create 150 new jobs in the local community.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "Drone Technology Helps Save Wildlife in Amazon Rainforest",
      category: "Impact",
      date: "February 28, 2024",
      readTime: "5 min read",
      excerpt: "Conservation teams use our thermal imaging drones to track and protect endangered species in remote areas.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "CEO Interview: The Future of Commercial Aviation",
      category: "Industry",
      date: "February 20, 2024",
      readTime: "6 min read",
      excerpt: "Our CEO discusses regulatory changes, market trends, and the next decade of drone technology advancement.",
      image: "/api/placeholder/400/200"
    },
    {
      title: "GSV Wins Innovation Award at Tech Summit 2024",
      category: "Awards",
      date: "February 15, 2024",
      readTime: "2 min read",
      excerpt: "Recognition for our groundbreaking work in sustainable drone technology and environmental monitoring.",
      image: "/api/placeholder/400/200"
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Product News": return "bg-primary text-primary-foreground";
      case "Business": return "bg-accent text-accent-foreground";
      case "Company News": return "bg-secondary text-secondary-foreground";
      case "Impact": return "bg-green-500 text-white";
      case "Industry": return "bg-purple-500 text-white";
      case "Awards": return "bg-yellow-500 text-yellow-900";
      default: return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-24 gradient-hero">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">News & Insights</h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Stay updated with the latest developments in drone technology, company news, 
            and industry insights from GSV Drones.
          </p>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          {articles.filter(article => article.featured).map((article, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-2xl mb-16">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center">
                  <Newspaper className="w-16 h-16 text-muted-foreground" />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className={`${getCategoryColor(article.category)} w-fit mb-4`}>
                    {article.category}
                  </Badge>
                  <h2 className="text-3xl font-bold mb-4">{article.title}</h2>
                  <p className="text-lg text-muted-foreground mb-6">{article.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <Button size="lg">
                    Read Full Article
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Articles Grid */}
      <section className="pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
            <p className="text-xl text-muted-foreground">
              Discover more stories and insights
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.filter(article => !article.featured).map((article, index) => (
              <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-shadow group cursor-pointer">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <Newspaper className="w-12 h-12 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                
                <CardHeader>
                  <Badge className={`${getCategoryColor(article.category)} w-fit mb-2`}>
                    {article.category}
                  </Badge>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.date}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-muted">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Informed</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Subscribe to our newsletter for the latest updates on drone technology, 
            industry trends, and company news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background"
            />
            <Button size="lg">Subscribe</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
