export const filterBySearch = <T,>(
    items: T[],
    search: string,
    fields: (keyof T)[]
): T[] => {
    if (!search) return [];

    return items.filter((item) =>
        fields.some((field) => {
            const value = item[field];

            if (Array.isArray(value)) {
                return value.some((v) =>
                    String(v).toLowerCase().includes(search)
                );
            }

            return String(value).toLowerCase().includes(search);
        })
    );
};

type JoinConfig<
  TBase extends Record<string, any>,
  TJoin extends Record<string, any>
> = {
  collection: TJoin[]
  baseKey: keyof TBase
  joinKey: keyof TJoin
  as: string
}

export function joinCollections<TBase extends Record<string, any>>(
  baseCollection: TBase[],
  joins: JoinConfig<TBase, any>[]
) {
  return baseCollection.map((item) => {

    const result: Record<string, any> = { ...item }

    joins.forEach(({ collection, baseKey, joinKey, as }) => {

      const match = collection.find(
        (c) => c[joinKey] === item[baseKey]
      )

      result[as] = match ?? null
    })

    return result
  })
}