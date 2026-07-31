from django.shortcuts import render
from django.http import Http404
from django.template.loader import get_template
from django.template.exceptions import TemplateDoesNotExist

def generic_page(request, page_name):
    """
    Renders any .html template requested by name.
    """
    # Security: only allow alphanumeric and hyphens in the page name
    if not page_name.replace('-', '').isalnum():
        raise Http404("Page not found")
        
    template_name = f"{page_name}.html"
    try:
        # Check if template exists
        get_template(template_name)
    except TemplateDoesNotExist:
        raise Http404("Page not found")
        
    return render(request, template_name)

def index(request):
    """
    Renders the landing page explicitly at the root URL.
    """
    return render(request, 'index.html')
