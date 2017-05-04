import { get as requestTemplate } from 'requester';
// import { handlebars } from 'handlebars';

const cache = {};

export function getTemplate(templateName) {
    if(cache.hasOwnProperty('templateName')) {
        return Promise.resolve(cache[templateName]);
    }
    
    return requestTemplate(`templates/${templateName}.handlebars`)
        .then(template => {
            const compiledTemplate = Handlebars.compile(template);
            cache[templateName] = compiledTemplate;
            return Promise.resolve(compiledTemplate);
        })
}
