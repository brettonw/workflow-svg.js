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
        // assuming 'parameters' is an array of nodes that describes a workflow network, break out
        // all the nodes and wires
        this.nodes = Object.create(null);
        this.wires = Object.create(null);
        for (let parameter of parameters) {
            let node = Workflow.Node.new (parameter);
            nodes[node.name] = node;

            // extract the wires
        }

        // create an execution order

        return this;
    };

    return _;
} ();
