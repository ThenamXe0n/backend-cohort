function isAdmin(req, res, next) {
  try {
    if (req.query?.role !== "admin") {
      return res.status(401).json({ message: "access denied" });
    }
    // next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

function greetingMessage(req, res, next) {
  try {
    req.message="welcome to server!";
    req.javascript="programming language"
    next();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { isAdmin, greetingMessage }; //default export

// module.exports = {isAdmin,isStudent} //default export
