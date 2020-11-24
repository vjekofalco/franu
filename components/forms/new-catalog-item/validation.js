export const validate = values => {
    const errors = {};

    if(!values.category) {
        errors.category = 'Obavezno polje'
    }

    if(!values.brand) {
        errors.brand = 'Obavezno polje'
    }

    if (!values.name) {
        errors.name = 'Obavezno polje'
    } else if (values.name.length > 100) {
        errors.name = 'Naziv artikla mora sadrzavati manje od 100 simbola'
    }

    if (!values.distributor) {
        errors.distributor = 'Obavezno polje'
    } else if (values.distributor.length > 50) {
        errors.distributor = 'Naziv distributera mora sadrzavati manje od 50 simbola'
    }

    if (!values.source) {
        errors.source = 'Obavezno polje'
    }

    if (!values.price) {
        errors.price = 'Obavezno polje'
    } else if (!/^\d+(\.\d{1,2})?$/.test(values.price)) {
        errors.price = 'Dozvoljeno je unijeti samo brojeve sa maksimalno 2 decimalna mjesta'
    }

    if(!values.description) {
        errors.description = 'Obavezno polje'
    }  else if (values.description.length < 50) {
        errors.description = 'Opis artikla mora imati vise od 50 simbola. Skini nesto sa interneta.'
    }

    if(!values.images) {
        errors.images = 'Obavezno polje'
    }

    return errors;
}
