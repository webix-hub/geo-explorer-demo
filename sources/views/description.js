import {JetView} from "webix-jet";
import {countries} from "models/countries";

export default class DescriptionView extends JetView{
	config(){
		return {
			template:"Description",
			scroll:"y"
		};
	}
	init(tpl){
		this.on(this.app,"country:select",id => {
			tpl.setHTML(countries.getItem(id).dsc);
		});
	}
}
