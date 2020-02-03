using System.Web;
using System.Web.Mvc;

namespace Creating_A_REST_Webservice_With_CSharp_and_VS
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
        }
    }
}
