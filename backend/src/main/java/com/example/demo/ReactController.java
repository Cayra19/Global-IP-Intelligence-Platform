package com.example.demo; // same as main class

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

    // Handles SPA routes like /dashboard and /login without catching static assets.
    @RequestMapping(value = "/{path:^(?!api|static|asset-manifest\\.json|favicon\\.ico|manifest\\.json$)[^\\.]*$}")
    public String redirect() {
        return "forward:/index.html";
    }

    // Handles nested SPA routes like /admin/dashboard and /my-filings/123.
    @RequestMapping(value = "/{path:^(?!api|static)[^\\.]*$}/{path2:[^\\.]*}/**")
    public String redirectNested() {
        return "forward:/index.html";
    }
}
