import EidMubarokTemplate from "../../components/EidMubarokTemplate";
import LebaranTemplate from "../../components/LebaranTemplate";
import NewspaperTemplate from "../../components/NewspaperTemplate";

export function renderTemplate(template, images) {
    switch (template) {
        case "eidmubarok":
            return <EidMubarokTemplate images={images} />;

        case "lebaran":
            return <LebaranTemplate images={images} />;

        case "newspaper":
            return <NewspaperTemplate images={images} />;

        default:
            return <div>Template tidak ditemukan</div>;
    }
}