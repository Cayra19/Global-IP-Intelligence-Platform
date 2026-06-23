package com.example.demo; // same as main class

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class ReactController {

    // Handles single-level paths: /dashboard, /login, etc.
    @RequestMapping(value = "/{path:[^\\.]*}")
    public String redirect() {
        return "forward:/index.html";
    }

    // Handles nested paths: /admin/dashboard, /my-filings/123, etc.
    @RequestMapping(value = "/{path:[^\\.]*}/**")
    public String redirectNested() {
        return "forward:/index.html";
    }
}