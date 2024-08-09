const path = require("path");

// عرض صفحة تسجيل الدخول
exports.showLoginPage = (req, res) => {
  res.render("login", { title: "Login - ChatApp" });
};

// عرض صفحة التسجيل
exports.showRegisterPage = (req, res) => {
  res.render("register", { title: "Register - ChatApp" });
};

// معالجة تقديم نموذج تسجيل الدخول
exports.handleLogin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // إضافة المنطق هنا للتحقق من بيانات تسجيل الدخول
  // على سبيل المثال، التحقق من بيانات المستخدم في قاعدة البيانات

  // إرسال رد على البيانات الواردة كاختبار
  res.send(`Email: ${email}, Password: ${password}`);
};
