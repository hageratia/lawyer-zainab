import "../../App.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import img1 from "../../assets/icons-services/2.svg";
import img2 from "../../assets/icons-services/6.svg";
import img3 from "../../assets/icons-services/9.svg";
import img4 from "../../assets/icons-services/2.svg";
import img5 from "../../assets/icons-services/1.svg";
import img6 from "../../assets/icons-services/3.svg";
import img7 from "../../assets/icons-services/5.svg";
import img8 from "../../assets/icons-services/4.svg";

const ServicesPage = () => {
  const { ref: img1Ref, inView: img1InView } = useInView();
  const { ref: img2Ref, inView: img2InView } = useInView();
  const { ref: img3Ref, inView: img3InView } = useInView();
  const { ref: img4Ref, inView: img4InView } = useInView();
  const { ref: img5Ref, inView: img5InView } = useInView();
  const { ref: img6Ref, inView: img6InView } = useInView();
  const { ref: img7Ref, inView: img7InView } = useInView();
  const { ref: img8Ref, inView: img8InView } = useInView();

  return (
    <>
      <section id="services" className="my-5 py-5">
        <div className="container">
          <div className="head mb-5 text-center">
            <h2 className="text-main fw-bold">خدماتنا</h2>
          </div>
          <div className="row text-center m-auto justify-content-between">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img1Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img1InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img1} className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">
                  مفاوضات الصلح والحلول الودية
                </h5>
                <p className="small-paragraph" dir="rtl">
                  الوساطة وتقريب وجهات النظر عرض الرأي القانوني والحل الأمثل
                  للنزاع إقناع أطـراف النزاع بقبول الحلول الودية وعدم اللجوء
                  للمحاكم.
                </p>
              </motion.div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img2Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img2InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img2} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">تحصيل الديون</h5>
                <p className="small-paragraph" dir="rtl">
                  تحصيل الديون المتعثرة والمطالبات المالية ومتابعة تنفيذ
                  الأحكام.
                </p>
              </motion.div>
            </div>

            {/* الصورة الثالثة */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img3Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img3InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img3} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">الخدمات القانونية</h5>
                <p className="small-paragraph" dir="rtl">
                  الترافع والتقاضي، تمثيل العملاء في جميع إجراءات التقاضي لكافة
                  أنواع القضايا لدى المحاكم والجهات العدلية.
                </p>
              </motion.div>
            </div>

            {/* الصورة الرابعة */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img4Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img4InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img4} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">
                  الشركات ورواد الأعمال
                </h5>
                <p className="small-paragraph" dir="rtl">
                  تقديم كافة الخدمات والاستشارات المتعلقة بقطاع الأعمال
                  والمشاريع الناشئة، تشمل تأسيس وإنشاء الشركات.
                </p>
              </motion.div>
            </div>

            {/* الصورة الخامسة */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img5Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img5InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img5} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">
                  الإستشارات القانونية
                </h5>
                <p className="small-paragraph" dir="rtl">
                  للاستشارات القانونية دور مهم في تقديم المشورة للعملاء قبل
                  البدء بالإجراءات القانونية.
                </p>
              </motion.div>
            </div>

            {/* باقي الصور بنفس الطريقة */}
            <div className="col-lg-4 col-md-6 col-sm-6">
              <motion.div
                ref={img6Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img6InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img6} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">صياغة العقود</h5>
                <p className="small-paragraph" dir="rtl">
                  نقوم بصياغة العقود التجارية المحلية باللغة العربية بطريقة
                  واضحة تضمن استمرار العلاقات التجارية.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <motion.div
                ref={img7Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img7InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img7} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">القضايا العمالية</h5>
                <p className="small-paragraph" dir="rtl">
                  نمثل عملاءنا في جميع القضايا والمنازعات العمالية ونقدم
                  الاستشارة القانونية حول أفضل أساليب حل النزاعات.
                </p>
              </motion.div>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-6">
              <motion.div
                ref={img8Ref}
                initial={{ opacity: 0, y: 30 }}
                animate={img8InView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="image-container">
                  <img src={img8} alt="" className="w-25" />
                  <div className="image-background"></div>
                </div>
                <h5 className="text-main font-bold mt-3">
                  الإدارة القانونية للمنشآت
                </h5>
                <p className="small-paragraph" dir="rtl">
                  التعاقد السنوي مع المنشآت التجارية والذي يتم بموجبه إدارتها
                  قانونيا وإدارة عقودها وقراراتها في مواجهة موظفيها ومواجـهة
                  الجهات الاعتبارية التي تتعامل معها على جميع الأصعدة.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
};

export default ServicesPage;
