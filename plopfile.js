module.exports = function (plop) {
  plop.setActionType('createComponentName', function (answers) {
    if (answers.filename === '') {
      throw 'filename is required';
    }
    let componentName = '';
    answers.filename.split('-').forEach((str) => {
      componentName += str.charAt(0).toUpperCase() + str.slice(1);
    });
    answers.componentName = componentName;
    return 'success status message';
  });

  plop.setGenerator('component', {
    description: 'Basic Vue component using Typescript',
    prompts: [
      {
        type: 'input',
        name: 'filename',
        message: 'filename: ',
      },
    ],
    actions: [
      {
        type: 'createComponentName',
      },
      {
        type: 'addMany',
        destination: 'src/components/{{filename}}',
        templateFiles: 'plop_templates/component/*.hbs',
        base: 'plop_templates/component',
      },
    ],
  });
};
