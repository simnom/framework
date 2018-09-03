import Manager from './src/components/Manager';

/*
 * Initialize the components Manager.
 */
const manager = new Manager();

/**
 * Themosis Library Public API.
 */
const themosis = {
    /**
     * Register a component.
     *
     * @param {string} name
     * @param {Object} component A component reference or any value.
     *
     * @return {Manager} Returns the Components Manager instance.
     */
    register: (name: string, component: any) => {
        return themosis.components.add(name, component);
    },
    /**
     * Provides a public API to handle the registered components.
     */
    components: {
        /**
         * Add and register a new component.
         *
         * @param {string} name
         * @param component
         *
         * @return {Manager}
         */
        add: (name: string, component: any) => {
            return manager.addComponent(name, component);
        },
        /**
         * Return all registered components.
         */
        all: () => {
            return manager.all()
        },
        /**
         * Return the registered component based on given name.
         *
         * @param {string} name
         */
        get: (name: string) => {
            return manager.getComponent(name);
        },
        /**
         * Check if the given component has been registered.
         *
         * @param {string} name
         *
         * @return {boolean}
         */
        has: (name: string) => {
            return manager.hasComponent(name);
        }
    },
    /**
     * Displays a simple message.
     */
    hello: () => {
        return 'Themosis Framework';
    },
};

export default themosis;