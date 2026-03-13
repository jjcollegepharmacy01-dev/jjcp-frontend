import { Link } from "react-router-dom";

const blogs = [
  { title: "Training at Various Hospitals", date: "24 Aug 2023", image: "https://axisip.ac.in/upload/blog/1748600518.webp" },
  { title: "Training on Sophisticated Instruments", date: "24 Aug 2023", image: "https://axisip.ac.in/upload/blog/1692857918.jpg" },
  // { title: "Training at Charitable Blood Center", date: "24 Aug 2023", image: "https://axisip.ac.in/upload/blog/1692857622.jpg" },
  // { title: "Training at Chhatarpur", date: "24 Aug 2023", image: "https://axisip.ac.in/upload/blog/1692857325.jpg" },
];

const BlogSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto px-4">
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
          Blog & <span className="text-primary">News Updates</span>
        </h2>
        <Link to="/media" className="hidden md:inline-flex px-5 py-2.5 border-2 border-primary text-primary rounded-md font-medium hover:bg-primary hover:text-primary-foreground transition-colors">
          View All Updates
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {blogs.map((blog, i) => (
          <div key={i} className="bg-card rounded-lg border border-border overflow-hidden hover:shadow-lg transition-shadow group">
            <div className="h-48 overflow-hidden">
              <img src={blog.image} alt={blog.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
            </div>
            <div className="p-5">
              <p className="text-xs text-muted-foreground mb-2">{blog.date}</p>
              <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
