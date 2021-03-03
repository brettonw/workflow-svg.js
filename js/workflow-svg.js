let Workflow = Bedrock.Workflow = Object.create (null);

// a single node placed in the field
Workflow.Wire = function () {
    let _ = Object.create (null);

    _.init = function (parameters) {
        return this;
    };

    return _;
} ();

// a single node placed in the field
Workflow.Node = function () {
    let _ = Object.create (null);

    _.init = function (parameters) {
        this.name = parameters.name;
        return this;
    };

    return _;
} ();

// the field of nodes and the connections (wires) between them
Workflow.Field = function () {
    let _ = Object.create (null);

    _.init = function (parameters) {
        return this;
    };

    return _;
} ();
