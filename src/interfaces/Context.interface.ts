import ApolloContextInterface from './ApolloContext.interface';
import DataSourcesInterface from './DataSources.interface';

interface ContextInterface extends ApolloContextInterface {
	dataSources: DataSourcesInterface
}

export default ContextInterface;