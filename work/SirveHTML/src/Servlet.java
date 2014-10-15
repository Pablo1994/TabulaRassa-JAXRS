
import java.io.*;
import java.util.*;
import javax.servlet.*;
import javax.servlet.http.*;

import javax.servlet.annotation.WebServlet;

@WebServlet(urlPatterns = {"/TabulaRassa/"})
public class Servlet extends HttpServlet {

    static final long serialVersionUID = 1L;

    protected void doGet(HttpServletRequest request,
            HttpServletResponse response)
            throws ServletException, IOException {
        System.out.println("Serve servlet");
        response.sendRedirect("http://localhost:8082/TabulaRassa/tabula_rassa.html");

    }

    protected void doPost(HttpServletRequest request,
            HttpServletResponse response)
            throws IOException, ServletException {
        doGet(request, response);
    }
}

