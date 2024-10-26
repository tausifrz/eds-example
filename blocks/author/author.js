import {fetchplaceholders} from '../../scripts/aem.js' 

async function craetetableWithPlaceholder(table) {
    const placeholders = await fetchplaceholders();
    const {fnameKey, lnameKey, roleKey, orgKey, cntryKey, header,firstName, lastName,role,organization,country} = placeholders;
}