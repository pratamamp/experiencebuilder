import { type DataSource, type DataSourceConstructorOptions, type DataSourceFactory } from './interfaces';
import { FeatureDataRecordImpl } from './implementations/feature-record-impl';
import { CSVDataSourceImpl } from './implementations/csv-data-source-impl';
import type { FeatureLayerDataSourceConstructorOptions } from './implementations/feature-layer-data-source-impl';
import type { SceneLayerDataSourceConstructorOptions } from './implementations/scene-layer-data-source-impl';
import { FeatureLayerDataSourceImpl } from './implementations/feature-layer-data-source-impl';
import { FeatureServiceDataSourceImpl } from './implementations/feature-service-data-source-impl';
import { GroupLayerDataSourceImpl } from './implementations/group-layer-data-source-impl';
import { MapServiceDataSourceImpl } from './implementations/map-service-data-source-impl';
import { SimpleLocalDataSourceImpl } from './implementations/simple-local-data-source-impl';
import { SceneServiceDataSourceImpl } from './implementations/scene-service-data-source-impl';
import { SceneLayerDataSourceImpl } from './implementations/scene-layer-data-source-impl';
import * as dataSourceJsonCreator from './support/data-source-json-creator';
export declare class JimuCoreDataSourceFactory implements DataSourceFactory {
    createDataSource(options: DataSourceConstructorOptions): DataSource;
}
export * from './base-classes';
export * from './interfaces';
export * from './mixins';
export { FeatureDataRecordImpl, CSVDataSourceImpl, FeatureLayerDataSourceImpl, FeatureServiceDataSourceImpl, GroupLayerDataSourceImpl, MapServiceDataSourceImpl, SimpleLocalDataSourceImpl, SceneServiceDataSourceImpl, SceneLayerDataSourceImpl, type FeatureLayerDataSourceConstructorOptions, type SceneLayerDataSourceConstructorOptions, dataSourceJsonCreator };
