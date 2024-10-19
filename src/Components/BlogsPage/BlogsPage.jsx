import { useState } from "react";
import "../../App.css";
import { Link } from "react-router-dom";

const BlogsPage = () => {
  const [visibleBlogs, setVisibleBlogs] = useState(6);
  const [showAll, setShowAll] = useState(false);

  const loadMoreBlogs = () => setVisibleBlogs((prev) => prev + 6);
  const hideBlogs = () => {
    setVisibleBlogs(6);
    setShowAll(false);
  };

  const blogs = [
    { title: "التقاضي في القضايا التجارية", link: "/commercial-issues" },
    { title: "أنظمة الملكية الفكرية", link: "/astronomical-property" },
    { title: "قضايا تقسيم التركات", link: "/division-of-estates" },
    { title: "الدعاوى العقارية وحقوق التملك", link: "/real-estate-lawsuits" },
    { title: "صياغة العقود التجارية", link: "/commercial-ontracts" },
    { title: "القضايا المعلوماتية", link: "/information-issues" },
    { title: "الطلاق وفسخ عقد النكاح والخُلع", link: "/devorce" },
    { title: "تأسيس شركات", link: "/establishing-companies" },
    { title: "القضايا الجنائية", link: "/criminal-cases" },
    { title: "العلاقات العمالية", link: "/labor-relations" },
    { title: "تحصيل الديون", link: "/debt-collection" },
    { title: "إعداد مذكرات قانونية", link: "/preparing-legal-memorandums" },
  ];

  return (
    <>
      <section id="blogs" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">المــدونات</h2>
          </div>
          <div
            className="row text-center g-3 justify-content-between"
            dir="rtl"
          >
            {blogs.slice(0, visibleBlogs).map((blog, index) => (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="lay cards p-2 rounded m-3">
                  <Link to={blog.link} className="text-decoration-none">
                    <div className="content-blog mt-2 pb-2">
                      <h5 className="text-main font-bold text-brown">
                        {blog.title}
                      </h5>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          {visibleBlogs < blogs.length && !showAll && (
            <div className="text-center my-4">
              <button
                className="load bg-brown border rounded-circle"
                onClick={loadMoreBlogs}
              >
                <i className="fa-solid fa-caret-down text-white p-1"></i>
              </button>
            </div>
          )}
          {visibleBlogs > 6 && (
            <div className="text-center my-4">
              <button
                className="bg-brown border rounded-circle"
                onClick={hideBlogs}
              >
                <i className="fa-solid fa-caret-up text-white p-1"></i>
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BlogsPage;
