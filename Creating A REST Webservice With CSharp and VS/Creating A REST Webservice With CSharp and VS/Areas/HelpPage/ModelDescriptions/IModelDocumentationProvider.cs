using System;
using System.Reflection;

namespace Creating_A_REST_Webservice_With_CSharp_and_VS.Areas.HelpPage.ModelDescriptions
{
    public interface IModelDocumentationProvider
    {
        string GetDocumentation(MemberInfo member);

        string GetDocumentation(Type type);
    }
}